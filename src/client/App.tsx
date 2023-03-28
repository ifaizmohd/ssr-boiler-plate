import React, { FC } from "react";
import { getCurrentPath } from "../lib/router/router";
import Router from "./components/Router/Router";
import { AppProps } from "./types/App.types";

const App: FC<AppProps> = () => {
  // const pathname = getCurrentPath();
  return (
    <div>
      <h2>Hi I'm App component</h2>
      {/* <Router path={pathname} /> */}
    </div>
  );
};

export default App;
