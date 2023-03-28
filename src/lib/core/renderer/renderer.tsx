import React from "react";
import { Request, Response } from "express";
import { renderToPipeableStream } from "react-dom/server";
import Document from "../../../client/Document";

export function renderToNodeStram(req: Request, res: Response) {
  const { pipe } = renderToPipeableStream(<Document />, {
    bootstrapScripts: ["main.js"],
    onShellReady() {
      res.setHeader("content-type", "text/html");
      pipe(res);
    },
  });
}
