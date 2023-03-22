import { promised } from "../core/Promised";
import { matchedRoute } from "./router";
import { Route } from "./router.types";

export function matchRoutes(routes: Array<Route>, pathname: string) {
  if (!routes || !routes.length) {
    throw Error("Invalid route");
  }
  if (!pathname) {
    throw Error("Invalid pathname");
  }
  return matchedRoute(routes, pathname);
}
