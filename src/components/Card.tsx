import BCard from "react-bootstrap/Card";
import { Movie } from "../pages/Movie/types";
import { TVShow } from "../pages/TVShow/types";

interface Props extends Partial<Movie & TVShow> {
  onClick: (id: Movie["id"] | TVShow["id"]) => void;
}

function Card({ id, name, posterUrl, releaseDate, overview, startAirDate, lastAirDate, onClick }: Props) {
  const releaseYear = releaseDate ? new Date(releaseDate).getFullYear() : "";
  const startYear = startAirDate ? new Date(startAirDate).getFullYear() : "";
  const lastYear = lastAirDate ? new Date(lastAirDate).getFullYear() : "";

  const title = `${name} (${releaseYear || startYear + "-" + lastYear})`;

  return (
    <BCard style={{ cursor: "pointer" }} onClick={() => onClick(id!)}>
      <BCard.Img variant="top" src={posterUrl} />
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
