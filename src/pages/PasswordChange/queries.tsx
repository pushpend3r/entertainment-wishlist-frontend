import { gql } from "@apollo/client";

export const UPDATE_PASSWORD = gql`
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
`;
