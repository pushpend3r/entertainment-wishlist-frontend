import { graphql } from "../../gql/gql";

export const GET_MOVIE_DETAILS = graphql(/* GraphQL */ `
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
`);

export const ADD_MOVIE_TO_WISHLIST = graphql(/* GraphQL */ `
  mutation ADD_MOVIE_TO_WISHLIST($movieId: Int) {
    addMovieToWishlist(movieId: $movieId)
  }
`);

export const REMOVE_MOVIE_FROM_WISHLIST = graphql(/* GraphQL */ `
  mutation REMOVE_MOVIE_FROM_WISHLIST($movieId: Int) {
    removeMovieFromWishlist(movieId: $movieId)
  }
`);

export const ADD_MOVIE_TO_WATCHEDLIST = graphql(/* GraphQL */ `
  mutation ADD_MOVIE_TO_WATCHEDLIST($movieId: Int) {
    addMovieToWatchedlist(movieId: $movieId)
  }
`);

export const REMOVE_MOVIE_FROM_WATCHEDLIST = graphql(/* GraphQL */ `
  mutation REMOVE_MOVIE_FROM_WATCHEDLIST($movieId: Int) {
    removeMovieFromWatchedlist(movieId: $movieId)
  }
`);
