import { OperationVariables, useMutation, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

import {
  GET_MOVIE_DETAILS,
  ADD_TO_WATCHEDLIST,
  REMOVE_FROM_WATCHEDLIST,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "./queries";
import { GetMovieDetails } from "./types";
import useIsUserLoggedIn from "../../hooks/useIsUserLoggedIn";
import Button from "../../components/Button";
import Loader from "../../components/Loader";

function MoviePage() {
  const params = useParams();
  const movieId = Number(params.id);

  const isUserLoggedIn = useIsUserLoggedIn();
  const navigate = useNavigate();

  const {
    loading,
    data,
    refetch: refetchMovieDetails,
  } = useQuery<GetMovieDetails>(GET_MOVIE_DETAILS, {
    variables: {
      movieId,
    },
  });

  const [addToWishlist, addToWishlistResponse] = useMutation(ADD_TO_WISHLIST);
  const [removeFromWishlist, removeFromWishlistResponse] = useMutation(REMOVE_FROM_WISHLIST);

  const [addToWatchedList, addToWatchedListResponse] = useMutation(ADD_TO_WATCHEDLIST);
  const [removeFromWatchedList, removeFromWatchedListResponse] = useMutation(REMOVE_FROM_WATCHEDLIST);

  useEffect(() => {
    if (!data) return;
  }, [data]);

  const handleWatchedListButtonClick = async () => {
    if (!isUserLoggedIn) {
      navigate("/login");
      return;
    }

    const variables: OperationVariables = {
      movieId,
    };

    if (isWatched) {
      await removeFromWatchedList({
        variables,
      });
    } else {
      await addToWatchedList({
        variables,
      });
    }
    refetchMovieDetails();
  };

  const handleWishListButtonClick = async () => {
    if (!isUserLoggedIn) {
      navigate("/login");
      return;
    }

    const variables: OperationVariables = {
      movieId,
    };

    if (isWishlisted) {
      await removeFromWishlist({
        variables,
      });
    } else {
      await addToWishlist({
        variables,
      });
    }
    refetchMovieDetails();
  };

  if (loading) return <Loader />;

  const {
    name,
    releaseDate,
    genres,
    overview,
    posterUrl,
    actor,
    director,
    writer,
    trailerLink,
    isWatched,
    isWishlisted,
  } = data?.getMovie || {};

  return (
    <Container fluid>
      <Row className="pt-3">
        <Col className="col-12 col-md-4 mb-3">
          <img src={posterUrl} alt={name} width={"100%"} className="object-fit-cover rounded shadow" />
          <Row className="p-3">
            <Button as="a" href={trailerLink} target="__blank">
              Trailer Link
            </Button>
          </Row>
          <Stack direction="horizontal" gap={3} className="justify-content-between">
            <Button
              onClick={handleWatchedListButtonClick}
              loading={addToWatchedListResponse.loading || removeFromWatchedListResponse.loading}
            >
              {isWatched ? "Remove from Watched List" : "Add to Watched List"}
            </Button>
            <Button
              onClick={handleWishListButtonClick}
              loading={addToWishlistResponse.loading || removeFromWishlistResponse.loading}
            >
              {isWishlisted ? "Remove from Wish List" : "Add to Wish List"}
            </Button>
          </Stack>
        </Col>
        <Col>
          <h1>{name}</h1>
          <p>
            {new Date(releaseDate!).toLocaleDateString()} // {genres!.map((genre) => genre.name).join(" | ")}
          </p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Cast</h2>
          <p>
            {actor
              ?.slice(0, 10)
              .map((item) => item.name)
              .join(" | ")}{" "}
            and more
          </p>
          <h2>Director</h2>
          <p>{director?.map((item) => item.name).join(" | ")} </p>
          <h2>Writer</h2>
          <p>{writer?.map((item) => item.name).join(" | ")} </p>
        </Col>
      </Row>
    </Container>
  );
}

export default MoviePage;
