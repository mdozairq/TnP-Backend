import express from "express";
import { postHero, signin } from "../controller/admin.js";
import { createBanner, deleteBanner, getBanner } from "../controller/banner.js";
import { addManagement, updateManagement } from "../controller/management.js";
import auth from "../middlewares/auth.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

router.post("/signin", signin);
router.get("/banner", getBanner);
router.post('/banner', auth, createBanner);
router.delete('/banner/:id', auth, deleteBanner);
router.post('/management', auth, upload.single('img'), addManagement);
router.patch('/:id', auth, upload.single('img'), updateManagement);
export default router; 