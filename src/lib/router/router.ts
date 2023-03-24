import { isBrowser } from "../core/browser";
import { Route } from "./router.types";

export function matchedRoute(routes: Array<Route>, pathname: string) {
  for (let i = 0; i < routes.length; i++) {
    if (
      routes[i].path === pathname ||
      (!routes[i].exact && routes[i].path.includes(pathname))
    ) {
      return routes[i];
    }
  }
}

export function renderRoutes(routes: Array<Route>, pathname: string) {
  if (!routes) {
    throw Error("Invalid Route");
  }
  if (!pathname) {
    throw Error("Invalid Path");
  }
  return matchedRoute(routes, pathname);
}

export function getCurrentPath(pathname?: string) {
  if (isBrowser()) {
    const host = window?.location.host;
    const href = window?.location.href;
    const path = href.includes(host) && href.split(host);
    return path[path.length - 1];
  }
  return pathname;
}
