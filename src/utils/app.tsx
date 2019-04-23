import Entry from "@/pages/HomePage";
import { createClient } from "@/utils/apollo";
import React from "react";
import { ApolloProvider } from "react-apollo";

export const client = createClient();

const App = (
  <ApolloProvider client={client}>
    <Entry />
  </ApolloProvider>
);

export default App;
