import { Request, Response } from "express";
import { renderToNodeStream } from "./renderer";
import { FC } from "react";

export default function renderNodeStream(
  req: Request,
  res: Response,
  Component: FC<any>,
  props: Object
) {
  if (!req || !res || !req.path) {
    throw new Error("Invalid Path");
  }
  renderToNodeStream(req, res, Component, props);
}
