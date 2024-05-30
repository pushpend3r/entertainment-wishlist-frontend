vi.mock("../../hooks/useIsUserLoggedIn");
vi.mock("react-router-dom");

import { render, screen } from "@testing-library/react";
import withAuth from "../withAuth";
import { vi } from "vitest";
import * as rrd from "react-router-dom";
import { ROUTES } from "../../enums/routes";
import useIsUserLoggedIn from "../../hooks/useIsUserLoggedIn";

const TestComponent = () => {
  return <p>{TestComponent.name}</p>;
};

describe("withAuth() hoc", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  test("rendered passed component when user is logged in", () => {
    // mock user is logged in
    vi.mocked(useIsUserLoggedIn).mockReturnValue(true);

    const WithAuthHOC = withAuth(TestComponent);
    render(<WithAuthHOC />);

    const testComponentText = screen.getByText(TestComponent.name);
    expect(testComponentText).toBeTruthy();
  });

  test("route to `/login` page when user is not logged in", () => {
    // mock user is logged out
    vi.mocked(useIsUserLoggedIn).mockReturnValue(false);

    const WithAuthHOC = withAuth(TestComponent);
    render(<WithAuthHOC />);

    const mockedUseNavigate = vi.mocked(rrd.useNavigate);
    const mockedNavigateFunc = mockedUseNavigate.mock.results[0].value;

    expect(mockedNavigateFunc.mock.calls[0][0]).toBe(ROUTES.LOGIN_PAGE);
  });
});
