import { Request, Response } from "express";
import GlobalLog from "../../../class/GlobalLog.class";
import errorCatching from "../../../function/errorCatching";

const uploadRootLog = new GlobalLog("uploadRoot");
const POST = errorCatching((req: Request, res: Response) => {
  res.status(200).json({
    status: "ok",
    message: "seem like upload complete",
  });
}, uploadRootLog);
