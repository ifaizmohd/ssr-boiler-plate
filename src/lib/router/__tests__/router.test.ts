import HomePage from "../../../client/pages/HomePage";
import { matchedRoute } from "../router";

describe("router test", () => {
  describe("matched route test", () => {
    const routes = [
      {
        path: "/",
        exact: true,
        Component: HomePage,
      },
    ];
    let pathname = "/";
    it("should return matched route when correct path is given", () => {
      const expectedRoute = {
        path: "/",
        exact: true,
        Component: HomePage,
      };
      expect(matchedRoute(routes, pathname)).toEqual(expectedRoute);
    });
  });
});
