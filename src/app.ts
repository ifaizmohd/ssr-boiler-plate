import "@babel/polyfill";
import express, { Express, Request, Response } from "express";
import routes from "./client/components/Routes/Routes";
import renderNodeStream from "./lib/core/renderer";
import { matchRoutes } from "./lib/router";

const app: Express = express();

// Setting up app to use public as static dir.
app.use(express.static("public"));
//
app.get("*", (req: Request, res: Response) => {
  //   const route = matchRoutes(routes, req.path);
  // TODO: Need to call server side props.
  renderNodeStream(req, res);
});

const port = 8080;

app.listen(port, () => {
  console.log(`server is up and running on http://localhost:${port}`);
});
