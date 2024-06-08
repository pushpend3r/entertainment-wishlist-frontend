import { graphql } from "../../gql/gql";

export const GET_TVSHOW_DETAILS = graphql(/* GraphQL */ `
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
`);

export const ADD_TO_WISHLIST = graphql(/* GraphQL */ `
  mutation ADD_TO_WISHLIST($tvshowId: Int) {
    addTVShowToWishlist(tvshowId: $tvshowId)
  }
`);

export const REMOVE_FROM_WISHLIST = graphql(/* GraphQL */ `
  mutation REMOVE_FROM_WISHLIST($tvshowId: Int) {
    removeTVShowFromWishlist(tvshowId: $tvshowId)
  }
`);

export const ADD_TO_WATCHEDLIST = graphql(/* GraphQL */ `
  mutation ADD_TO_WATCHEDLIST($tvshowId: Int) {
    addTVShowToWatchedlist(tvshowId: $tvshowId)
  }
`);

export const REMOVE_FROM_WATCHEDLIST = graphql(/* GraphQL */ `
  mutation REMOVE_FROM_WATCHEDLIST($tvshowId: Int) {
    removeTVShowFromWatchedlist(tvshowId: $tvshowId)
  }
`);
