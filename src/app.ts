import "@babel/polyfill";
import express, { Express, Request, Response } from "express";
import renderNodeStream from "./lib/core/renderer";
import { router } from "./lib/router/createPage";

const app: Express = express();

// Setting up app to use public as static dir.
app.use(express.static("public"));
//
app.get("*", (req: Request, res: Response) => {
  // TODO: Need to call server side props.
  router()
    .then(() => console.log("running router"))
    .catch((e) => console.log(e.message));
  renderNodeStream(req, res);
});

const port: number = 8080;

app.listen(port, () => {
  console.log(`server is up and running on http://localhost:${port}`);
});
