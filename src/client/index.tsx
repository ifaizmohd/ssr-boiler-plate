import * as React from "react";
import { hydrateRoot } from "react-dom/client";
import { matchRoutes } from "../lib/router";
import { getCurrentPath } from "../lib/router/router";
import App from "./App";
import BrowserRouter from "./components/Router/BrowserRouter";
import routes from "./components/Routes/Routes";
import Document from "./Document";

const Component = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const root = hydrateRoot(document.getElementById("root"), Component);
