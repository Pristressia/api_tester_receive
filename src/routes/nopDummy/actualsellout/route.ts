import { Router } from "express";
import POST from "./post";
import GET from "./get";

const router = Router();
router.post("/", POST);
router.get("/", GET);

export default router;
