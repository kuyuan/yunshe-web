import React from "react";
import { ApolloProvider } from "react-apollo";
import Entry from "../pages/HomePage";
import { createClient } from "./apollo";

export const client = createClient();

const App = (
  <ApolloProvider client={client}>
    <Entry />
  </ApolloProvider>
);

export default App;
