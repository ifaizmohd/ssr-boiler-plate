export function matchRouter(routes: Array<Object>, pathname: String) {
  if (!routes || !routes.length) {
    throw Error("Invalid route");
  }
  if (!pathname) {
    throw Error("Invalid pathname");
  }
}
