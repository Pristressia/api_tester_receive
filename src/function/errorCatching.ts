import { Request, Response, NextFunction } from "express";
import GlobalLog from "../class/GlobalLog.class";

type FunctionCatchingModified = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

export default function errorCatching(
  requestFunc: FunctionCatchingModified,
  globalLog: GlobalLog
): FunctionCatchingModified {
  return (req: Request, res: Response, next: NextFunction) => {
    // console.log("test function catch modified return");
    try {
      requestFunc(req, res, next);
    } catch (e) {
      globalLog.Log(`[error] - ${(e as Error).message}`, "error");
      console.error(e);
      res.status(400).json({
        status: "Error",
        message: (e as Error).message,
      });
    }
  };
}
