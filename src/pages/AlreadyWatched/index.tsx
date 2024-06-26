import { useQuery } from "@apollo/client";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

import { GET_ALREADY_WATCHED_MEDIA } from "./queries.graphql";
import Card from "../../components/Card";
import Loader from "../../components/Loader";
import withAuth from "../../hocs/withAuth";
import { Movie, TvShow } from "../../gql/graphql";

function AlreadyWatchedPage() {
  const { data, loading } = useQuery(GET_ALREADY_WATCHED_MEDIA, {
    fetchPolicy: "network-only",
  });
  const navigate = useNavigate();

  const handleMovieCardClick = (id: Movie["id"]) => {
    navigate(`/movie/${id}`);
  };

  const handleTVShowCardClick = (id: TvShow["id"]) => {
    navigate(`/tvshow/${id}`);
  };

  if (loading) return <Loader />;

  return (
    <Container className="pt-4">
      <h1>Movies</h1>
      <Row xs={1} md={2} xl={4} className="g-4 mb-3">
        {!data?.getWatchedMovies?.length && <p>NA</p>}
        {data?.getWatchedMovies?.map((movie) => (
          <Col key={movie!.id}>
            <Card
              id={movie!.id}
              name={movie!.name}
              overview={movie!.overview}
              posterUrl={movie!.posterUrl}
              releaseDate={movie!.releaseDate}
              onClick={handleMovieCardClick}
            />
          </Col>
        ))}
      </Row>

      <h1>TVShows</h1>
      <Row xs={1} md={2} xl={4} className="g-4">
        {!data?.getWatchedTVShows?.length && <p>NA</p>}
        {data?.getWatchedTVShows?.map((tvshow) => (
          <Col key={tvshow!.id}>
            <Card
              id={tvshow!.id}
              name={tvshow!.name}
              overview={tvshow!.overview}
              posterUrl={tvshow!.posterUrl}
              startAirDate={tvshow!.startAirDate}
              lastAirDate={tvshow!.lastAirDate}
              onClick={handleTVShowCardClick}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

const WithAuth = withAuth(AlreadyWatchedPage);

export default WithAuth;
