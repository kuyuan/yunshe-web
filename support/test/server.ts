import { ApolloServer } from "apollo-server";
import typeDefs from "../typeDefs";

const server = new ApolloServer({
  typeDefs,
  mocks: true,
});

export default server;
