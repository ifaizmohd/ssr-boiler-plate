import "@babel/polyfill";
import express, { Express, Request, Response } from "express";
import routes from "./client/components/Routes/Routes";
import { matchRoutes } from "./lib/router";
import { matchedRoute } from "./lib/router/router";
import { Route } from "./lib/router/router.types";
import renderer from "./utils/renderer";

const app: Express = express();

// Setting up app to use public as static dir.
app.use(express.static("public"));
//
app.get("*", (req: Request, res: Response) => {
  const route = matchRoutes(routes, req.path);
  console.log("matched route route - ", route, typeof route);
  const context = {
    route,
    props: "Hi this is props from ssr",
  };
  renderer(req, context, res);
});

const port = 8080;

app.listen(port, () => {
  console.log(`server is up and running on http://localhost:${port}`);
});
