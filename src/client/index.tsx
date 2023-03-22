import * as React from "react";
import { hydrateRoot } from "react-dom/client";
import { matchRoutes } from "../lib/router";
import { getCurrentPath } from "../lib/router/router";
import App from "./App";
import routes from "./components/Routes/Routes";
import Document from "./Document";

const root = hydrateRoot(document, <Document />);
