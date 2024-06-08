import { graphql } from "../../gql/gql";

export const UPDATE_PASSWORD = graphql(/* GraphQL */ `
  mutation UPDATE_PASSWORD(
    $oldPassword: String
    $newPassword: String
    $accessToken: String
    $refreshToken: String
  ) {
    updatePassword(
      oldPassword: $oldPassword
      newPassword: $newPassword
      accessToken: $accessToken
      refreshToken: $refreshToken
    ) {
      accessToken
      refreshToken
    }
  }
`);
