import React from "react";
import ReactDOM from "react-dom";
import App from "./utils/app";

ReactDOM.hydrate(
  App,
  document.getElementById("root"),
);

if (module.hot) {
  module.hot.accept();
}
