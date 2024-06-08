import { graphql } from "../../../gql/gql";

export const GET_NEW_TOKENS = graphql(/* GraphQL */ `
  mutation GET_NEW_TOKENS($refreshToken: String) {
    getNewTokens(refreshToken: $refreshToken) {
      accessToken
      refreshToken
    }
  }
`);
