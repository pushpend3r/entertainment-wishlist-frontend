import { useLocalStorage } from "@uidotdev/usehooks";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useIsUserLoggedIn from "../hooks/useIsUserLoggedIn";
import { useEffect } from "react";
import Button from "./Button";
import { ROUTES } from "../enums/routes";

export const LoggedInNavItems = [
  {
    to: ROUTES.WANNA_WATCH_PAGE,
    displayValue: "Wanna Watch",
  },
  {
    to: ROUTES.ALREADY_WATCHED_PAGE,
    displayValue: "Already Watched",
  },
  {
    to: ROUTES.PASSWORD_CHANGE_PAGE,
    displayValue: "Password Change",
  },
] as const;

export const LoggedOutNavItems = [
  {
    to: ROUTES.REGISTER_PAGE,
    displayValue: "Register",
  },
  {
    to: ROUTES.LOGIN_PAGE,
    displayValue: "Login",
  },
] as const;

function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isUserLoggedIn = useIsUserLoggedIn();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_accessToken, setAccessToken] = useLocalStorage("accessToken");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_refreshToken, setRefreshToken] = useLocalStorage("refreshToken");

  const handleLogOutButtonClick = () => {
    setAccessToken("");
    setRefreshToken("");

    navigate(ROUTES.HOME_PAGE);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as="div">
          <NavLink to={ROUTES.HOME_PAGE}>Entertainment Wishlist</NavLink>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {isUserLoggedIn ? (
              <>
                {LoggedInNavItems.map((item, index) => (
                  <Nav.Link as="div" key={index}>
                    <NavLink to={item.to}>{item.displayValue}</NavLink>
                  </Nav.Link>
                ))}
                <Button onClick={handleLogOutButtonClick}>Logout</Button>
              </>
            ) : (
              <>
                {LoggedOutNavItems.map((item, index) => (
                  <Nav.Link as="div" key={index}>
                    <NavLink to={item.to}>{item.displayValue}</NavLink>
                  </Nav.Link>
                ))}
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
