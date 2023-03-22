import { ReactElement } from "react";

export interface RouterTypes {
  routes: Array<Object>;
  pathname: String;
}

export interface Route {
  path: string;
  component: ReactElement;
  exact: boolean;
}
