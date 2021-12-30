import express from "express";
import { postHero, signin } from "../controller/admin.js";
import { createBanner, deleteBanner, getBanner } from "../controller/banner.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post("/signin", signin);
router.get("/banner", getBanner);
router.post('/banner', auth, createBanner);
router.delete('/banner/:id', auth, deleteBanner);

export default router;