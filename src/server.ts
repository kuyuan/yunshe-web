import * as express from "express";

const server = express();
server
  .disable("x-powered-by")
  .get("/*", (req, res) => {
      res.status(200).send(
        `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <div id="root">Hello world</div>
    </body>
</html>`,
      );
  });

export default server;
