import React, { FC } from "react";
import { matchRoutes } from "../../../lib/router";
import { getCurrentPath } from "../../../lib/router/router";
import routes from "../Routes/Routes";
import { RouterProps } from "./Router.types";

const Router: FC<RouterProps> = ({ path }) => {
  const pathname = getCurrentPath(path);
  const { Component } = matchRoutes(routes, pathname);
  return Component ? <Component /> : <h2>404 Not Found</h2>;
};

export default Router;
