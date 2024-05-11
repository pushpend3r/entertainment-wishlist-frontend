import { gql } from "@apollo/client";

export const GET_TRENDING = gql`
  query GET_TRENDING {
    trending {
      movies {
        id
        name
        overview
        posterUrl
        releaseDate
      }
      tvshows {
        id
        name
        overview
        posterUrl
        startAirDate
      }
    }
  }
`;
