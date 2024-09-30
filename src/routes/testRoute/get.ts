// #testRoute

import { Request, Response } from "express";
import errorCatching from "../../function/errorCatching";
import GlobalLog from "../../class/GlobalLog.class";
import testRouteLog from "./log";

const GET = errorCatching((req: Request, res: Response) => {
  testRouteLog.Log("get request found !!", "log");
  res.status(200).json({
    status: "ok",
    message: "compiling complete here is the message from test route",
  });
}, testRouteLog);

export default GET;
