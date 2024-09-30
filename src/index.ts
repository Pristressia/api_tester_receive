import express, { Request, Response, Router } from "express";
import GlobalLog from "./class/GlobalLog.class";

//#region import router
import testRoute from "./routes/testRoute/route";

//#endregion

const app = express();
const PORT = 3000;

const appLog = new GlobalLog("app-status");

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    status: "ok",
    message: "set up complete",
  });
});

app.use("/testroute", testRoute);

app.listen(PORT, () => {
  console.info(`[app-status] : now app is listen @port : ${3000}`);
  appLog.Log(`now app is listen @port : ${3000}`, "info");
});
