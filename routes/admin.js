import express from "express";
// import { route } from "express/lib/application";
import { postHero, signin } from "../controller/admin.js";
import { createBanner, deleteBanner, getBanner } from "../controller/banner.js";
import { addManagement, deleteManagement, getManagenent, updateManagement } from "../controller/management.js";
import { createPlacement, deletePlacement, getPlacement, updatePlacement } from "../controller/placement.js";
import auth from "../middlewares/auth.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

router.post("/signin", signin);
router.get("/banner", getBanner);
router.post('/banner', auth, createBanner);
router.delete('/banner/:id', auth, deleteBanner);
router.get('/management', getManagenent);
router.post('/management', auth, addManagement);
router.patch('/management/:id', auth, updateManagement);
router.delete('/management/:id', auth, deleteManagement);
router.get('/placement', getPlacement);
router.post('/placement', auth, createPlacement);
router.patch('/placement/:id', auth, updatePlacement);
router.delete('/placement/:id', auth, deletePlacement);


export default router; 