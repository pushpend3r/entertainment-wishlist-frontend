import { HttpLink, InMemoryCache, ApolloClient as _ApolloClient, from } from "@apollo/client";
import { auth, error } from "./middlewares";

class ApolloClient extends _ApolloClient<unknown> {
  static httpLink = new HttpLink({ uri: import.meta.env.VITE_GRAPHQL_SERVER_URI });
  constructor() {
    super({
      link: from([auth, error, ApolloClient.httpLink]),
      cache: new InMemoryCache(),
    });
  }
}

export default new ApolloClient();
