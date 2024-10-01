import { Request, Response } from "express";
import GL from "./log";
import errorCatching from "../../../function/errorCatching";

const GET = errorCatching((req: Request, res: Response) => {
  return res.status(200).json({
    status: "ok",
    message: "upload route has been ready",
  });
}, GL);

export default GET;
