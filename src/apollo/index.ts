import { ApolloClient, HttpLink, InMemoryCache, from } from "@apollo/client";
import { auth, error } from "./middlewares";

const httpLink = new HttpLink({ uri: import.meta.env.VITE_GRAPHQL_SERVER_URI });

const apolloClient = new ApolloClient({
  link: from([auth, error, httpLink]),
  cache: new InMemoryCache(),
});

export default apolloClient;
