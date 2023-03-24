import React, { FC } from "react";
import Router from "./components/Router/Router";
import { AppProps } from "./types/App.types";

const App: FC<AppProps> = ({ path }) => {
  return (
    <div>
      <h2>Hi I'm App component</h2>
      <Router path={path} />
    </div>
  );
};

export default App;
