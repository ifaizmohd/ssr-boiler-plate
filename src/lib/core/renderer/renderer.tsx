import React, { FC } from "react";
import { Request, Response } from "express";
import { renderToPipeableStream } from "react-dom/server";
import Document from "../../../client/Document";

export function renderToNodeStream(
  req: Request,
  res: Response,
  Component: FC<any>,
  props: Object
) {
  const { pipe } = renderToPipeableStream(
    <Document path={req.path} Component={Component} props={props} />,
    {
      bootstrapScripts: ["main.js"],
      onShellReady() {
        res.setHeader("content-type", "text/html");
        pipe(res);
      },
    }
  );
}
