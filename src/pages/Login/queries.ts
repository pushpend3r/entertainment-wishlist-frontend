import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation LOGIN($email: String, $password: String) {
    login(input: { email: $email, password: $password }) {
      accessToken
      refreshToken
    }
  }
`;
