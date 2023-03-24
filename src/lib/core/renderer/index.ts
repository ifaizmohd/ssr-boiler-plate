import { Request, Response } from "express";
import { renderToNodeStram } from "./renderer";

export default function renderNodeStream(req: Request, res: Response) {
  if (!req || !res || !req.path) {
    res.send("404 Not Found");
  }
  renderToNodeStram(req, res);
}
