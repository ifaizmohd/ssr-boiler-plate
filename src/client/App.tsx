import React, { FC } from "react";
import { AppProps } from "./types/App.types";
import { getMatchedComponent } from "./components/Routes/Routes";

const App: FC<AppProps> = ({ props }) => {
  const { Component } = getMatchedComponent();
  return <Component props={props} />;
};

export default App;
