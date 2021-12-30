import mongoose from "mongoose";
import banner from "../models/banner.js"


export const getBanner = async (req, res) => {
    try {
        const allBanner = await banner.find();
        res.status(200).json(allBanner);
    }
    catch (err) {
        res.status(404).json({ message: err.message })
        console.log(err)
    }

}

export const createBanner = async(req, res) => {
    console.log(req.body);
    const post = req.body;
    const newBanner = new banner({...post})

    try {
        await newBanner.save();
        res.status(201).json(newBanner);
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const deleteBanner = async(req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    await banner.findByIdAndRemove(id);
    res.json({message: 'Post Deleted Successfully'})
}