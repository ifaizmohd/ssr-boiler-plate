import "@babel/polyfill";
import express, { Express, Request, Response } from "express";
import Hydrator from "./client/lib/hydrator";
import renderNodeStream from "./lib/core/renderer";
import { getPageToRender } from "./lib/router/createPage";

const app: Express = express();
const hydrator = new Hydrator();

// Setting up app to use public as static dir.
app.use(express.static("public"));
//
app.get("*", async (req: Request, res: Response) => {
  console.log("path", req.path);
  if (req.path === "/favicon.ico") {
    res.status(404);
  }
  // TODO: Need to call server side props.
  const pageToRender = await getPageToRender(req.path);
  console.log("page to render - ", pageToRender);
  const context = {
    component: pageToRender,
  };
  hydrator.setRouteContext(context);
  renderNodeStream(req, res, hydrator);
});

const port: number = 8080;

app.listen(port, () => {
  console.log(`server is up and running on http://localhost:${port}`);
});
