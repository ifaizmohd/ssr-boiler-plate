import { FC, ReactElement } from "react";

export interface RouterTypes {
  routes: Array<Object>;
  pathname: String;
}

export interface Route {
  path: string;
  Component: FC;
  exact?: boolean;
}

export interface Page {
  getServerSideProps?: Function;
  default: FC;
}
