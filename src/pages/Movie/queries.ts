import { gql } from "@apollo/client";

export const GET_MOVIE_DETAILS = gql`
  query GET_MOVIE_DETAILS($movieId: Int) {
    getMovie(id: $movieId) {
      id
      name
      overview
      genres {
        id
        name
      }
      backdropUrl
      posterUrl
      actor {
        id
        name
      }
      director {
        id
        name
      }
      writer {
        id
        name
      }
      trailerLink
      releaseDate
      isWatched
      isWishlisted
    }
  }
`;

export const ADD_TO_WISHLIST = gql`
  mutation ADD_TO_WISHLIST($movieId: Int) {
    addMovieToWishlist(movieId: $movieId)
  }
`;

export const REMOVE_FROM_WISHLIST = gql`
  mutation REMOVE_FROM_WISHLIST($movieId: Int) {
    removeMovieFromWishlist(movieId: $movieId)
  }
`;

export const ADD_TO_WATCHEDLIST = gql`
  mutation ADD_TO_WATCHEDLIST($movieId: Int) {
    addMovieToWatchedlist(movieId: $movieId)
  }
`;

export const REMOVE_FROM_WATCHEDLIST = gql`
  mutation REMOVE_FROM_WATCHEDLIST($movieId: Int) {
    removeMovieFromWatchedlist(movieId: $movieId)
  }
`;
