import React, { FC, useContext } from "react";
import { RouterContext } from "./Router.context";
import { RouterProps } from "./Router.types";

const BrowserRouter: FC<RouterProps> = () => {
  const { Component } = useContext(RouterContext);

  return (
    <>
      <Component />
    </>
  );
};

export default BrowserRouter;
