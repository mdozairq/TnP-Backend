import mongoose from "mongoose";
import placement from "../models/placement.js"

export const getPlacement = async (req, res) => {
    try {
        const allPlacement = await placement.find();
        res.status(200).json(allPlacement);
    }
    catch (err) {
        res.status(404).json({ message: err.message })
        console.log(err)
    }
}

export const createPlacement = async(req, res) => {
    console.log(req.body);
    const post = req.body;
    const newPlacement = new placement({...post})

    try {
        await newPlacement.save();
        res.status(201).json(newPlacement);
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const updatePlacement = async (req, res) => {
    const { id } = req.params;
    const {branch, batch, total, placed, trained  } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPlacement = { branch, batch, total, placed, trained, _id: id };

    await placement.findByIdAndUpdate(id, updatedPlacement, { new: true });

    res.json(updatedPlacement);
}

export const deletePlacement = async(req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    await placement.findByIdAndRemove(id);
    res.json({message: 'Post Deleted Successfully'})
}