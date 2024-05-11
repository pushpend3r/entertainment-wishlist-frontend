import { ApolloLink } from "@apollo/client";
import { TokenType } from "../../types";

const auth = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => {
    let accessToken = localStorage.getItem(TokenType.ACCESS_TOKEN);

    if (accessToken) {
      accessToken = JSON.parse(accessToken);
    }

    return {
      headers: {
        ...headers,
        authorization: accessToken ? `Bearer ${accessToken}` : "",
      },
    };
  });
  return forward(operation);
});

export default auth;
