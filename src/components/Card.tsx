import BCard from "react-bootstrap/Card";
import { Movie, TVShow } from "../types";

interface Props extends Partial<Movie & TVShow> {
  onClick: (id: Movie["id"] | TVShow["id"]) => void;
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
      <BCard.Img variant="top" src={posterUrl} className="rounded" />
      <BCard.Body>
        <BCard.Title>{title}</BCard.Title>
        <BCard.Text
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
          title={overview}
        >
          {overview}
        </BCard.Text>
      </BCard.Body>
    </BCard>
  );
}

export default Card;
