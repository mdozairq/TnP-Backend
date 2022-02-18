import mongoose from "mongoose";
import announcements from "../models/announcement.js"
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
import path from "path"
const __dirname = path.resolve();
import fs from 'fs'


dotenv.config();

export const getAnnouncement = async (req, res) => {
    try {
        const allAnnouncement = await announcements.find();
        res.status(200).json(allAnnouncement);
    }
    catch (err) {
        res.status(404).json({ message: err.message })
        console.log(err)
    }

}

export const createAnnouncement = async (req, res, next) => {
    try {
        const uid = uuidv4();
        const file = new announcements({
            title: req.body.title,
            category: req.body.category,
            desc: req.body.desc,
            filename: req.file.filename,
            uuid: uid,
            path: req.file.path,
            size: req.file.size,
            fileLink: `${process.env.APP_BASE_URL}/admin/announcement/files/${uid}`
        });
        const response = await file.save();
        res.status(201).json(response);
    } catch (error) {
        console.log(error);
        res.status(409).json({ message: error.message });
    }
}

export const deleteAnnouncement = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    // else {
        // const file = await announcements.findById(id);
        try {
        //     fs.unlinkSync(file.path);
            await announcements.findByIdAndRemove(id);
            res.json({ message: 'File Deleted Successfully' })
        }
        catch(err){
            res.json({err: err.message});
        }        
    // }
}

export const announcementDownload = async (req, res) => {
    const file = await announcements.findOne({ uuid: req.params.uid });
    // Link expired
    if (!file) {
        return res.send('Link has been expired.');
    }
    const response = await file.save();
    const filePath = `${__dirname}/./${file.path}`;
    console.log(filePath);
    res.download(filePath);
}

