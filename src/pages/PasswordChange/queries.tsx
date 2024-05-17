import { gql } from "@apollo/client";

export const UPDATE_PASSWORD = gql`
  mutation UPDATE_PASSWORD($oldPassword: String, $newPassword: String) {
    updatePassword(oldPassword: $oldPassword, newPassword: $newPassword) {
      accessToken
      refreshToken
    }
  }
`;