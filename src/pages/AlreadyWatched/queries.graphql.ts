import { graphql } from "../../gql/gql";

export const GET_ALREADY_WATCHED_MEDIA = graphql(/* GraphQL */ `
  query GET_ALREADY_WATCHED_MEDIA {
    getWatchedMovies {
      id
      name
      overview
      posterUrl
      releaseDate
    }
    getWatchedTVShows {
      id
      name
      overview
      posterUrl
      startAirDate
      lastAirDate
    }
  }
`);
