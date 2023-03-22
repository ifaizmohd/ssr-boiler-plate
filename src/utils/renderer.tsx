import * as React from "react";
import { renderToString } from "react-dom/server";
import App from "../client/App";

export default function renderer() {
  const app: string = renderToString(<App />);
  const template: string = `
    <html>
        <head>
        </head>
        <body>
            <div id="root">${app}</div>
            <script src="bundle.js"></script>
        </body>
    </html>
  `;
  return template;
}
