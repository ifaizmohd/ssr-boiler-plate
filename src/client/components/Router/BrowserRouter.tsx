import React, { FC, useContext } from "react";
import { RouterContext } from "./Router.context";
import { RouterProps } from "./Router.types";

const BrowserRouter: FC<RouterProps> = ({ children }) => {
  const { Component } = useContext(RouterContext);
  console.log("component on client side - ", Component);
  return <>{children}</>;
};

export default BrowserRouter;
