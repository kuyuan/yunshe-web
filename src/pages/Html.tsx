import React from "react";
import { HelmetData } from "react-helmet";

export interface HtmlProps {
  css?: string;
  helmet: HelmetData;
  content: string;
  scripts: string[];
  styles?: Array<React.ReactElement<{}>>;
  window?: {
    [key: string]: object;
  };
}

export default ({ css, helmet, content, scripts, styles, window = {} }: HtmlProps) => (
  <html
    lang="en"
    prefix="og: http://ogp.me/ns#"
    {...helmet.htmlAttributes.toString()}
  >
    <head>
      {helmet.title.toComponent()}
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {helmet.meta.toComponent()}
      {helmet.style.toComponent()}
      {helmet.link.toComponent()}
      {css && <link rel="stylesheet" href={css} />}
      {styles}
      {helmet.script.toComponent()}
      {helmet.noscript.toComponent()}
    </head>
    <body {...helmet.bodyAttributes.toComponent()}>
      <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
      <script
        dangerouslySetInnerHTML={{
          __html: Object.keys(window).reduce(
            (out, key) =>
              (out += `window.${key}=${JSON.stringify(window[key])};`),
            "",
          ),
        }}
      />
    </body>
    {scripts.map((script) => (
      <script key={script} src={script} />
    ))}
  </html>
);
