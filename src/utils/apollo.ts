import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";

export const createClient = () => {
  return new ApolloClient({
    link: createHttpLink({
      uri: process.env.APOLLO_SERVER_URI || "https://gql-placeholder.herokuapp.com/graphql",
    }),
    cache: new InMemoryCache(),
  });
};
