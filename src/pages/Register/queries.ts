import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation REGISTER($name: String, $email: String, $password: String) {
    createUser(input: { name: $name, email: $email, password: $password }) {
      accessToken
      refreshToken
    }
  }
`;
