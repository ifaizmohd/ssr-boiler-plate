import React, { FC, useContext } from "react";
import { RouterContext } from "./Router.context";
import { StaticRouterProps } from "./Router.types";

const StaticRouter: FC<StaticRouterProps> = ({ path, context, children }) => {
  const { setRouterPath, setRoutingComponent } = useContext(RouterContext);
  if (path) {
    setRouterPath(path);
  }
  if (context) {
    const { component } = context;
    setRoutingComponent(component);
  }
  return <>{children}</>;
};

export default StaticRouter;
