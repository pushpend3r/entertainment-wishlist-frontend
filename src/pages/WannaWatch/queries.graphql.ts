import { graphql } from "../../gql/gql";

export const GET_WANNA_WATCH_MEDIA = graphql(/* GraphQL */ `
  query GET_WANNA_WATCH_MEDIA {
    getWishlistedMovies {
      id
      name
      overview
      posterUrl
      releaseDate
    }
    getWishlistedTVShows {
      id
      name
      overview
      posterUrl
      startAirDate
      lastAirDate
    }
  }
`);
