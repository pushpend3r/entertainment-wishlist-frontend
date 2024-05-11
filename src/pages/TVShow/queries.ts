import { gql } from "@apollo/client";

export const GET_TVSHOW_DETAILS = gql`
  query GET_TVSHOW_DETAILS($tvshowId: Int) {
    getTVShow(id: $tvshowId) {
      id
      name
      overview
      posterUrl
      startAirDate
      lastAirDate
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
      inProduction
      trailerLink
      seasons
      isWatched
      isWishlisted
    }
  }
`;

export const ADD_TO_WISHLIST = gql`
  mutation ADD_TO_WISHLIST($tvshowId: Int) {
    addTVShowToWishlist(tvshowId: $tvshowId)
  }
`;

export const REMOVE_FROM_WISHLIST = gql`
  mutation REMOVE_FROM_WISHLIST($tvshowId: Int) {
    removeTVShowFromWishlist(tvshowId: $tvshowId)
  }
`;

export const ADD_TO_WATCHEDLIST = gql`
  mutation ADD_TO_WATCHEDLIST($tvshowId: Int) {
    addTVShowToWatchedlist(tvshowId: $tvshowId)
  }
`;

export const REMOVE_FROM_WATCHEDLIST = gql`
  mutation REMOVE_FROM_WATCHEDLIST($tvshowId: Int) {
    removeTVShowFromWatchedlist(tvshowId: $tvshowId)
  }
`;
