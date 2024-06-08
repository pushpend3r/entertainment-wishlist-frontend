import { graphql } from "../../gql/gql";

export const REGISTER = graphql(/* GraphQL */ `
  mutation REGISTER($name: String, $email: String, $password: String) {
    createUser(input: { name: $name, email: $email, password: $password }) {
      accessToken
      refreshToken
    }
  }
`);
