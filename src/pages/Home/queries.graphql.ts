import { graphql } from "../../gql";

export const GET_TRENDING = graphql(/* GraphQL */ `
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
        lastAirDate
        inProduction
      }
    }
  }
`);
