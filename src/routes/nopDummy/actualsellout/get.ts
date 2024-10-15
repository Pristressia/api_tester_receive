import { Request, Response } from "express";
import actualSellOut_log from "./log";
import errorCatching from "../../../function/errorCatching";

// const Log = actualSellOut_log.Log;

const GET = errorCatching((req: Request, res: Response) => {
  //   console.log(actualSellOut_log.header);
  actualSellOut_log.Log("actualsellout api request get received");

  // console.log(actualSellOut_log.header);
  // Log("test Log function from object");

  res.status(200).json({
    status: "ok",
    message: "actualsellout get request responsed message",
  });
}, actualSellOut_log);

export default GET;
