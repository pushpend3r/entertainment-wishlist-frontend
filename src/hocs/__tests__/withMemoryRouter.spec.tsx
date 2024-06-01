import { render, screen } from "@testing-library/react";
import withMemoryRouter from "../withMemoryRouter";

const TestComponent = () => {
  return <p>{TestComponent.name}</p>;
};

describe(`${withMemoryRouter.name}() hoc`, () => {
  test("rendered passed component", () => {
    const WithRouter = withMemoryRouter(TestComponent);
    render(<WithRouter />);

    const testComponentText = screen.getByText(TestComponent.name);
    expect(testComponentText).toBeTruthy();
  });
});
