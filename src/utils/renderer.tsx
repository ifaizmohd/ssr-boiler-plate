import { Request, Response } from "express";
import * as React from "react";
import { renderToPipeableStream } from "react-dom/server";
import App from "../client/App";
import Document from "../client/Document";

export default function renderer(req: Request, context: any, res: Response) {
  const {
    route: { Component },
  } = context;
  const { pipe } = renderToPipeableStream(<Document path={req.path} />, {
    bootstrapScripts: ["main.js"],
    onShellReady() {
      res.setHeader("content-type", "text/html");
      pipe(res);
    },
  });
}
