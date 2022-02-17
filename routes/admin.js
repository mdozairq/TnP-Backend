import express from "express";
// import { route } from "express/lib/application";
import { postHero, signin } from "../controller/admin.js";
import { createBanner, deleteBanner, getBanner } from "../controller/banner.js";
import { createContact, deleteContact, getContact, updateContact } from "../controller/contact.js";
import { createDownload, deleteDownload, fileDownload, getDowload } from "../controller/download.js";
import { createGallery, deleteGallery, getGallery } from "../controller/gallery.js";
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
router.get('/download', getDowload);
router.post('/download', auth, upload.single('file'), createDownload);
router.delete('/download/:id', auth,  deleteDownload);
router.get('/download/files/:uid', fileDownload);
router.get('/gallery', getGallery);
router.post('/gallery', auth, createGallery)
router.delete('/gallery', auth, deleteGallery);
router.get('/contact', getContact);
router.post('/contact', auth, createContact);
router.patch('/contact/:id', auth, updateContact);
router.delete('/contact/:id', auth, deleteContact);


export default router; 