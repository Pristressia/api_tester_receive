import { Request, Response, Router } from "express";
import nopLog from "./log";

import upload_router from "./upload/route";
import actualsellout_router from "./actualsellout/route";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  nopLog.Log("nopdummy listened !!!");
  res.status(200).json({
    status: "ok",
    message: "nop dummy is listened",
  });
});

router.use("/upload", upload_router);
router.use("/actualsellout", actualsellout_router);

export default router;
