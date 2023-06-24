import { FC } from "react";
import { Page } from "../../lib/router/router.types";
import { RouterContext } from "../components/Router/Router.types";

export interface DocumentProps {
  path?: string;
  Component: FC<any>;
  props?: Object;
}
