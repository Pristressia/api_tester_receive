// #testRoute

import { Router, Request, Response } from "express";
import GET from "./get";

const router = Router();
router.get("/", GET);

export default router;
