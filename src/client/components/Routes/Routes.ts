import { Route } from "../../../lib/router/router.types";
import HomePage from "../../pages/HomePage";
import Counter from "../Counter/Counter";
import Post from "../Post/Post";

const routes: Array<Route> = [
  {
    path: "/",
    exact: true,
    Component: HomePage,
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
