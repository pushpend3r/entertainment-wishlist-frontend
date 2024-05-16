import { gql } from "@apollo/client";

export const GET_NEW_TOKENS = gql`
  mutation GET_NEW_TOKENS($refreshToken: String) {
    getNewTokens(refreshToken: $refreshToken) {
      accessToken
      refreshToken
    }
  }
`;
