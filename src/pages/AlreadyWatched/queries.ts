import { gql } from "@apollo/client";

export const GET_ALREADY_WATCHED_MEDIA = gql`
  query GET_WANNA_WATCH_MEDIA {
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
    }
  }
`;
