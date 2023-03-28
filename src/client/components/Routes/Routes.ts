import { Route } from "../../../lib/router/router.types";
import Home from "../../pages";
import Counter from "../Counter/Counter";
import Post from "../Post/Post";

const routes: Array<Route> = [
  {
    path: "/",
    exact: true,
    Component: Home,
  },
  {
    path: "/post",
    Component: Post,
  },
  {
    path: "/counter",
    Component: Counter,
  },
];

export default routes;
