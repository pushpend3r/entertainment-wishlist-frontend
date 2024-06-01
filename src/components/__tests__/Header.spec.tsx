import { render, screen, within } from "@testing-library/react";
import Header, { LoggedInNavItems, LoggedOutNavItems } from "../Header";
import withMemoryRouter from "../../hocs/withMemoryRouter";
import { TokenType } from "../../types";
import { ROUTES } from "../../enums/routes";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.scrollTo = vi.fn();

describe("<Header /> component", () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  afterAll(() => {
    vi.clearAllMocks();
  });

  test("user logged in snapshot match", () => {
    localStorage.setItem(TokenType.ACCESS_TOKEN, "123");

    const WithRouter = withMemoryRouter(Header);
    const { container } = render(<WithRouter />);
    expect(container).toMatchSnapshot();
  });

  test("logged in nav items render", () => {
    localStorage.setItem(TokenType.ACCESS_TOKEN, "123");

    const WithRouter = withMemoryRouter(Header);
    const { container } = render(<WithRouter />);
    LoggedInNavItems.forEach((item) => {
      const element = within(container).getByRole("link", { name: item.displayValue });
      expect(element).toHaveAttribute("href", item.to);
    });
  });

  test("user logged out snapshot match", () => {
    localStorage.removeItem(TokenType.ACCESS_TOKEN);

    const WithRouter = withMemoryRouter(Header);
    const { container } = render(<WithRouter />);
    expect(container).toMatchSnapshot();
  });

  test("logged out nav items render", () => {
    localStorage.removeItem(TokenType.ACCESS_TOKEN);

    const WithRouter = withMemoryRouter(Header);
    const { container } = render(<WithRouter />);

    LoggedOutNavItems.forEach((item) => {
      const element = within(container).getByRole("link", { name: item.displayValue });
      expect(element).toHaveAttribute("href", item.to);
    });
  });

  test("should have `/` link on logged in", () => {
    localStorage.setItem(TokenType.ACCESS_TOKEN, "123");

    const WithRouter = withMemoryRouter(Header);
    render(<WithRouter />);

    expect(screen.getByRole("link", { name: "Entertainment Wishlist" })).toHaveAttribute(
      "href",
      ROUTES.HOME_PAGE
    );
  });

  test("should have `/` link on logged out", () => {
    localStorage.removeItem(TokenType.ACCESS_TOKEN);

    const WithRouter = withMemoryRouter(Header);
    render(<WithRouter />);

    expect(screen.getByRole("link", { name: "Entertainment Wishlist" })).toHaveAttribute(
      "href",
      ROUTES.HOME_PAGE
    );
  });
});
