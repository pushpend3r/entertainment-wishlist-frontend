import { NetworkStatus, OperationVariables, useMutation, useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";

import {
  ADD_TO_WATCHEDLIST,
  ADD_TO_WISHLIST,
  GET_TVSHOW_DETAILS,
  REMOVE_FROM_WATCHEDLIST,
  REMOVE_FROM_WISHLIST,
} from "./queries";
import useIsUserLoggedIn from "../../hooks/useIsUserLoggedIn";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";

import Button from "../../components/Button";
import { GetTVShowDetails } from "./types";
import Loader from "../../components/Loader";
import { ROUTES } from "../../enums/routes";

function TVShowPage() {
  const params = useParams();
  const tvshowId = Number(params.id);

  const isUserLoggedIn = useIsUserLoggedIn();
  const navigate = useNavigate();

  const {
    loading,
    data,
    refetch: refetchTVShowDetails,
    networkStatus,
  } = useQuery<GetTVShowDetails>(GET_TVSHOW_DETAILS, {
    variables: {
      tvshowId,
    },
    notifyOnNetworkStatusChange: true,
  });

  const [addToWishlist, addToWishlistResponse] = useMutation(ADD_TO_WISHLIST);
  const [removeFromWishlist, removeFromWishlistResponse] = useMutation(REMOVE_FROM_WISHLIST);

  const [addToWatchedList, addToWatchedListResponse] = useMutation(ADD_TO_WATCHEDLIST);
  const [removeFromWatchedList, removeFromWatchedListResponse] = useMutation(REMOVE_FROM_WATCHEDLIST);

  const handleWatchedListButtonClick = async () => {
    if (!isUserLoggedIn) {
      navigate(ROUTES.LOGIN_PAGE);
      return;
    }

    const variables: OperationVariables = {
      tvshowId,
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
    refetchTVShowDetails();
  };

  const handleWishListButtonClick = async () => {
    if (!isUserLoggedIn) {
      navigate(ROUTES.LOGIN_PAGE);
      return;
    }

    const variables: OperationVariables = {
      tvshowId,
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
    refetchTVShowDetails();
  };

  if (loading && networkStatus !== NetworkStatus.refetch) return <Loader />;

  const {
    name,
    startAirDate,
    lastAirDate,
    inProduction,
    backdropUrl,
    posterUrl,
    seasons,
    genres,
    overview,
    actor,
    director,
    writer,
    trailerLink,
    isWatched,
    isWishlisted,
  } = data?.getTVShow || {};

  return (
    <Container fluid className="h-auto">
      <Row className="pt-3">
        <div
          className="background-poster w-100 h-100 position-absolute top-0 start-0 p-0 backdrop"
          style={{ zIndex: -1, backgroundImage: `url(${backdropUrl})` }}
        ></div>
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
              loading={
                addToWatchedListResponse.loading ||
                removeFromWatchedListResponse.loading ||
                networkStatus === NetworkStatus.refetch
              }
            >
              {isWatched ? "Remove from Watched List" : "Add to Watched List"}
            </Button>
            <Button
              onClick={handleWishListButtonClick}
              loading={
                addToWishlistResponse.loading ||
                removeFromWishlistResponse.loading ||
                networkStatus === NetworkStatus.refetch
              }
            >
              {isWishlisted ? "Remove from Wish List" : "Add to Wish List"}
            </Button>
          </Stack>
        </Col>
        <Col>
          <h1>{name}</h1>
          <p>
            {`Seasons - ${seasons}`} ({new Date(startAirDate!).getFullYear()} -{" "}
            {`${!inProduction ? new Date(lastAirDate!).getFullYear() : "continue"}`}) //{" "}
            {genres!.map((genre) => genre.name).join(" | ")}
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

export default TVShowPage;
