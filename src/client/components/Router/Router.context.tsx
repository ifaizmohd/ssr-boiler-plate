import React, { createContext, FC, useState } from "react";
import { RouterProviderTypes } from "./Router.types";

export const RouterContext = createContext({
  path: "/",
  Component: <></>,
  setRouterPath: (pathName: string) => {},
  setRoutingComponent: (routingComponent: FC) => {},
});

const RouterProvider: FC<RouterProviderTypes> = ({ children }) => {
  const [path, setPath] = useState("/");
  const [Component, setComponent] = useState(<></>);

  const setRouterPath = (pathName: string) => {
    if (pathName) {
      setPath(pathName);
    }
  };
  const setRoutingComponent = (routingComponent: any) => {
    if (routingComponent) {
      setComponent(routingComponent);
    }
  };

  return (
    <RouterContext.Provider
      value={{ path, Component, setRouterPath, setRoutingComponent }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export default RouterProvider;
