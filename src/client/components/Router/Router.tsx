import React, { FC } from "react";
import { matchRoutes } from "../../../lib/router";
import routes from "../Routes/Routes";
import { RouterProps } from "./Router.types";

const Router: FC<RouterProps> = ({ path }) => {
  return <h2>404 Not Found</h2>;
};

export default Router;
