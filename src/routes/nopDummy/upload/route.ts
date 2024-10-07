import { Router } from "express";
import log from "./log";
import POST_id from "./post";

const router = Router();

router.post("/:id", POST_id);

export default router;
