import { FC } from "react";

export interface RouterTypes {
  routes: Array<Object>;
  pathname: String;
}

export interface Route {
  path: string;
  Component: FC<any>;
  exact?: boolean;
}

export interface Page {
  getServerSideProps?: Function;
  default: FC<any>;
  getInitialProps?: Function;
  getStaticProps?: Function;
}
