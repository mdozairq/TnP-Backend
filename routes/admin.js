import express from "express";
import { postHero, signin } from "../controller/admin.js";

const router = express.Router();

router.get('/', postHero)
router.post("/signin", signin);

export default router;