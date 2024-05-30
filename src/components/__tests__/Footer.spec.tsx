import { render } from "@testing-library/react";
import Footer from "../Footer";

describe("<Footer /> component", () => {
  test("render", () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
