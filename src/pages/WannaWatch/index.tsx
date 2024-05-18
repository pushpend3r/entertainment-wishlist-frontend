import { useQuery } from "@apollo/client";
import { GET_WANNA_WATCH_MEDIA } from "./queries";
import { useNavigate } from "react-router-dom";
import { GetWannaWatchMedia } from "./types";
import { Col, Container, Row } from "react-bootstrap";
import Card from "../../components/Card";
import { Movie, TVShow } from "../../types";
import Loader from "../../components/Loader";
import withAuth from "../../components/withAuth";

function WannaWatchPage() {
  const { data, loading } = useQuery<GetWannaWatchMedia>(GET_WANNA_WATCH_MEDIA, {
    fetchPolicy: "network-only",
  });
  const navigate = useNavigate();

  const handleMovieCardClick = (id: Movie["id"]) => {
    navigate(`/movie/${id}`);
  };

  const handleTVShowCardClick = (id: TVShow["id"]) => {
    navigate(`/tvshow/${id}`);
  };

  if (loading) return <Loader />;

  return (
    <Container className="pt-4">
      <h1>Movies</h1>
      <Row xs={1} md={2} xl={4} className="g-4 mb-3">
        {!data?.getWishlistedMovies?.length && <p>NA</p>}
        {data?.getWishlistedMovies?.map((movie: Movie) => (
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

      <h1>TVShows</h1>
      <Row xs={1} md={2} xl={4} className="g-4">
        {!data?.getWishlistedTVShows?.length && <p>NA</p>}
        {data?.getWishlistedTVShows?.map((tvshow: TVShow) => (
          <Col key={tvshow.id}>
            <Card
              id={tvshow.id}
              name={tvshow.name}
              overview={tvshow.overview}
              posterUrl={tvshow.posterUrl}
              startAirDate={tvshow.startAirDate}
              lastAirDate={tvshow.lastAirDate}
              onClick={handleTVShowCardClick}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

const WithAuth = withAuth(WannaWatchPage);

export default WithAuth;
