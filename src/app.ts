import "@babel/polyfill";
import express, { Express, Request, Response } from "express";
import renderNodeStream from "./lib/core/renderer";
import { getPageToRender } from "./lib/router/createPage";

const app: Express = express();

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
  renderNodeStream(req, res);
});

const port: number = 8080;

app.listen(port, () => {
  console.log(`server is up and running on http://localhost:${port}`);
});
