import express from "express";
import { postHero } from "../controller/admin.js";

const router = express.Router();

router.get('/', postHero)

export default router;