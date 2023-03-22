import React, { FC } from "react";
import { AppProps } from "./types/App.types";

const App: FC<AppProps> = ({ Component }) => {
  return (
    <div>
      <h2>Hi I'm App component</h2>
      <Component />
    </div>
  );
};

export default App;
