// #testRoute

import { Router, Request, Response } from "express";
import upload_router from "./upload/route";
import GET from "./get";

const router = Router();

router.get("/", GET);
router.use("/upload", upload_router);

export default router;
