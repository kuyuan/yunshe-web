import React from 'react';
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import { createClient } from "@/utils/apollo";
import App from '@/pages/HomePage';

const client = createClient();

ReactDOM.hydrate(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
