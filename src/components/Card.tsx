import BCard from "react-bootstrap/Card";
import { TvShow, Movie } from "../gql/graphql";

interface Props extends Omit<TvShow, "__typename">, Omit<Movie, "__typename"> {
  onClick: (id: Movie["id"] | TvShow["id"]) => void;
}

function Card({
  id,
  name,
  posterUrl,
  releaseDate,
  overview,
  startAirDate,
  lastAirDate,
  onClick,
  inProduction,
}: Props) {
  const releaseYear = releaseDate ? new Date(releaseDate).getFullYear() : "";
  const startYear = startAirDate ? new Date(startAirDate).getFullYear() : "";
  const lastYear = lastAirDate ? new Date(lastAirDate).getFullYear() : "";

  const title = `${name} (${releaseYear || startYear + "-" + `${!inProduction ? lastYear : "continue"}`})`;

  return (
    <BCard style={{ cursor: "pointer" }} onClick={() => onClick(id!)}>
      <BCard.Img variant="top" src={posterUrl ?? "https://placehold.co/600x400"} className="rounded" />
      <BCard.Body>
        <BCard.Title as="h2" className="h5">
          {title}
        </BCard.Title>
        <BCard.Text
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
          title={overview ?? ""}
          as={"p"}
        >
          {overview}
        </BCard.Text>
      </BCard.Body>
    </BCard>
  );
}

export default Card;
