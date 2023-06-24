import { Route } from "../../../lib/router/router.types";
import Home from "../../pages";
import PostsPage from "../../pages/posts";
import UsersPage from "../../pages/users";
import Counter from "../Counter/Counter";

const routes: Array<Route> = [
  {
    path: "/",
    exact: true,
    Component: Home,
  },
  {
    path: "/users",
    Component: UsersPage,
  },
  {
    path: "/posts",
    Component: PostsPage,
  },
  {
    path: "/counter",
    Component: Counter,
  },
];

export default routes;

export function getMatchedComponent() {
  if (window) {
    const pathName = window.location.pathname;
    return routes.find((route) => pathName === route.path);
  }
}
