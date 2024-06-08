import { graphql } from "../../gql/gql";

export const LOGIN = graphql(/* GraphQL */ `
  mutation LOGIN($email: String, $password: String) {
    login(input: { email: $email, password: $password }) {
      accessToken
      refreshToken
    }
  }
`);
