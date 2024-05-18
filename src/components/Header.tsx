import { useLocalStorage } from "@uidotdev/usehooks";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useIsUserLoggedIn from "../hooks/useIsUserLoggedIn";
import { useEffect } from "react";
import Button from "./Button";

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

    navigate("/");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <NavLink to="/">Entertainment Wishlist</NavLink>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {isUserLoggedIn ? (
              <>
                <Nav.Link>
                  <NavLink to="/wanna-watch">Wanna Watch</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to="/already-watched">Already Watched</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to="/password-change">Password Change</NavLink>
                </Nav.Link>
                <Button onClick={handleLogOutButtonClick}>Logout</Button>
              </>
            ) : (
              <>
                <Nav.Link>
                  <NavLink to="/register">Register</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to="/login">Login</NavLink>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
