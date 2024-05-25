import { render, screen } from "@testing-library/react";
import Button from "../Button";

describe("<Button /> component", () => {
  test("render", () => {
    render(<Button />);
  });

  test("show loader", async () => {
    render(<Button loading />);
    const loader = screen.getByTestId("loader");
    expect(loader).toBeTruthy();
  });

  test("show text", async () => {
    const buttonText = "ButtonText";
    render(<Button>{buttonText}</Button>);
    const text = screen.getByText(buttonText);
    expect(text).toBeTruthy();
  });

  test("show loader then text", async () => {
    // show loading
    const loaderTestId = "loader";
    render(<Button loading />);
    const loader = screen.getByTestId(loaderTestId);
    expect(loader).toBeTruthy();

    // show text
    const buttonText = "ButtonText";
    render(<Button>{buttonText}</Button>);
    const text = screen.getByText(buttonText);
    expect(text).toBeTruthy();
  });
});
