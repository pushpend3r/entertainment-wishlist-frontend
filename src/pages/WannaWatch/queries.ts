import { gql } from "@apollo/client";

export const GET_WANNA_WATCH_MEDIA = gql`
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
    }
  }
`;
