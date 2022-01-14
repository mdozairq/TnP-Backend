import mongoose from "mongoose";
import download from "../models/download.js"
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";



dotenv.config();

export const getDowload = async (req, res) => {
    try {
        const allDownload = await download.find();
        res.status(200).json(allDownload);
    }
    catch (err) {
        res.status(404).json({ message: err.message })
        console.log(err)
    }

}

export const createDownload = async (req, res, next) => {
    try {
        const uid = uuidv4();
        const file = new download({
            name: req.body.name,
            category: req.body.category,
            filename: req.file.filename,
            uuid: uid,
            path: req.file.path,
            size: req.file.size,
            fileLink: `${process.env.APP_BASE_URL}/download/files/${uid}`
        });
        const response = await file.save();
        res.status(201).json(response);
    } catch (error) {
        console.log(error);
        res.status(409).json({message: error.message});
    }
}

export const deleteDownload = async(req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    await download.findByIdAndRemove(id);
    res.json({message: 'Post Deleted Successfully'})
}

export const fileDownload = async(req, res) =>{
    const file = await File.findOne({ uuid: req.params.uid });
   // Link expired
   if(!file) {
        return res.send('Link has been expired.');
   } 
   const response = await file.save();
   const filePath = `${__dirname}/../${file.path}`;
   res.download(filePath);
}

