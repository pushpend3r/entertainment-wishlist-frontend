import { render, screen } from "@testing-library/react";
import Card from "../Card";

// eslint-disable-next-line
const emptyFunc = (_id: any) => {};

describe("<Card />", () => {
  test("render", () => {
    const image = "https://placehold.co/600x400";
    const title = "sometitle";
    const overview = "someoverview";

    const { container } = render(
      <Card onClick={emptyFunc} name={title} posterUrl={image} overview={overview} id={0} />
    );
    expect(container).toMatchSnapshot();
  });

  test("show release year in title", () => {
    const releaseDate = "2023-01-01";
    const releaseYear = new Date(releaseDate).getFullYear();
    render(<Card onClick={emptyFunc} releaseDate={releaseDate} id={0} />);
    const title = screen.getByRole("heading", { name: new RegExp(String(releaseYear)) });
    expect(title).toBeInTheDocument();
  });

  test("show start air year in title", () => {
    const startAirDate = "2023-01-01";
    const startAirYear = new Date(startAirDate).getFullYear();
    render(<Card onClick={emptyFunc} startAirDate={startAirDate} id={0} />);
    const title = screen.getByRole("heading", { name: new RegExp(String(startAirYear)) });
    expect(title).toBeInTheDocument();
  });

  test("show end air year in title", () => {
    const lastAirDate = "2023-01-01";
    const lastAirYear = new Date(lastAirDate).getFullYear();
    render(<Card onClick={emptyFunc} lastAirDate={lastAirDate} id={0} />);
    const title = screen.getByRole("heading", { name: new RegExp(String(lastAirYear)) });
    expect(title).toBeInTheDocument();
  });

  test("don't show start air year if release year is in title", () => {
    const startAirDate = "2023-01-01";
    const startAirYear = new Date(startAirDate).getFullYear();

    const releaseDate = "2024-01-01";
    const releaseYear = new Date(releaseDate).getFullYear();

    render(<Card onClick={emptyFunc} startAirDate={startAirDate} releaseDate={releaseDate} id={0} />);
    const title = screen.getByRole("heading", { name: new RegExp(String(releaseYear)) });

    expect(title).not.toHaveTextContent(new RegExp(String(startAirYear)));
  });
});
