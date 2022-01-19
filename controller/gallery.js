import mongoose from "mongoose";
import gallery from "../models/gallery.js";

export const getGallery = async (req, res) => {
    try {
        const allGallery = await gallery.find();
        res.status(200).json(allGallery);
    }
    catch (err) {
        res.status(404).json({ message: err.message })
        console.log(err)
    }

}

export const createGallery = async(req, res) => {
    console.log(req.body);
    const post = req.body;
    const newGallery = new gallery({...post})

    try {
        await newGallery.save();
        res.status(201).json(newGallery);
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const deleteGallery = async(req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    await gallery.findByIdAndRemove(id);
    res.json({message: 'Post Deleted Successfully'})
}