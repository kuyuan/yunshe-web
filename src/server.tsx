import App, { client } from "@/utils/app";
import express from "express";
import React from "react";
import { renderToStringWithData } from "react-apollo";
import { renderToStaticMarkup } from "react-dom/server";

const server = express();

const Html = ({ content, state }) => {
    return (
        <html>
        <body>
            <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
            <script
              dangerouslySetInnerHTML={{ __html: `window.__APOLLO_STATE__=${JSON.stringify(state).replace(/</g, "\\u003c")};` }}
            />
        </body>
        </html>
    );
};

server
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get("/*", async (req, res) => {
    const content = await renderToStringWithData(App);
    const initialState = client.extract();
    const html = <Html content={content} state={initialState} />;

    res.status(200);
    res.send(`<!doctype html>\n${renderToStaticMarkup(html)}`);
    res.end();
  });

export default server;
