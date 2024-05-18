import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { GET_TRENDING } from "./queries";
import Card from "../../components/Card";
import { Movie, TVShow } from "../../types";
import { GetTrending } from "./types";
import Loader from "../../components/Loader";

function HomePage() {
  const { data, loading } = useQuery<GetTrending>(GET_TRENDING, { fetchPolicy: "network-only" });
  const navigate = useNavigate();

  if (loading) return <Loader />;

  const handleMovieCardClick = (id: Movie["id"]) => {
    navigate(`/movie/${id}`);
  };

  const handleTVShowCardClick = (id: TVShow["id"]) => {
    navigate(`/tvshow/${id}`);
  };

  return (
    <Container className="pt-4">
      <h1>Trending Movies</h1>
      <Row xs={1} md={2} xl={4} className="g-4 mb-3">
        {data?.trending?.movies?.map((movie: Movie) => (
          <Col key={movie.id}>
            <Card
              id={movie.id}
              name={movie.name}
              overview={movie.overview}
              posterUrl={movie.posterUrl}
              releaseDate={movie.releaseDate}
              onClick={handleMovieCardClick}
            />
          </Col>
        ))}
      </Row>

      <h1>Trending TVShows</h1>
      <Row xs={1} md={2} xl={4} className="g-4">
        {data?.trending?.tvshows?.map((tvshow: TVShow) => (
          <Col key={tvshow.id}>
            <Card
              id={tvshow.id}
              name={tvshow.name}
              overview={tvshow.overview}
              posterUrl={tvshow.posterUrl}
              startAirDate={tvshow.startAirDate}
              lastAirDate={tvshow.lastAirDate}
              inProduction={tvshow.inProduction}
              onClick={handleTVShowCardClick}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomePage;
