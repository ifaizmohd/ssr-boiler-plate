import React, { FC } from "react";
import { matchRoutes } from "../lib/router";
import { getCurrentPath } from "../lib/router/router";
import App from "./App";
import StaticRouter from "./components/Router/StaticRouter";
import routes from "./components/Routes/Routes";
import { DocumentProps } from "./types/Document.types";

declare global {
  interface Window {
    Hydrate?: any;
  }
}

const Document: FC<DocumentProps> = ({ path, context }) => {
  const script = <script>{`var hydrate = ${JSON.stringify(context)}`}</script>;
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div id="root">
          <StaticRouter path={path} context={context}>
            <App />
          </StaticRouter>
        </div>
        {script}
      </body>
    </html>
  );
};

export default Document;
