import "@babel/polyfill";
import express, { Express, Request, Response } from "express";
import renderer from "./utils/renderer";

const app: Express = express();

// Setting up app to use public as static dir.
app.use(express.static("public"));
app.get("/", (req: Request, res: Response) => {
  res.send(renderer());
});

const port = 8080;

app.listen(port, () => {
  console.log(`server is up and running on http://localhost:${port}`);
});
