import "@babel/polyfill";
import express, { Express, Request, Response } from "express";
import Hydrator from "./client/lib/hydrator";
import renderNodeStream from "./lib/core/renderer";
import { getPageToRender } from "./lib/router/createPage";

const app: Express = express();
const hydrator = new Hydrator();

// Setting up app to use public as static dir.
app.use(express.static("public"));
// Handling requests.
app.get("*", async (req: Request, res: Response) => {
  console.log("path", req.path);
  const { Component, props } = await getPageToRender(req.path);
  renderNodeStream(req, res, Component, props);
});

const port: number = 8080;

app.listen(port, () => {
  console.log(`server is up and running on http://localhost:${port}`);
});
