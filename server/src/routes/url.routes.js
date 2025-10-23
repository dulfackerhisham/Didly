import { Router } from "express";
import { createShortUrl } from "../controller/url.controller.js";

const router = Router()

router.post("/", createShortUrl);

export default router;