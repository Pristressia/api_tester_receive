import { Request, Response } from "express";
import errorCatching from "../../function/errorCatching";
import testRouteLog from "./log";

const POST = errorCatching((req: Request, res: Response) => {
  res.status(200).json({
    status: "ok",
  });
}, testRouteLog);
