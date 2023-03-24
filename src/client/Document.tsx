import React, { FC } from "react";
import { matchRoutes } from "../lib/router";
import { getCurrentPath } from "../lib/router/router";
import App from "./App";
import routes from "./components/Routes/Routes";
import { DocumentProps } from "./types/Document.types";

const Document: FC<DocumentProps> = ({ path }) => {
  const pathname = getCurrentPath(path);
  const { Component } = matchRoutes(routes, pathname);
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div id="root">
          <App path={path} />
        </div>
      </body>
    </html>
  );
};

export default Document;
