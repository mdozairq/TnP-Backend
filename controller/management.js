import mongoose from "mongoose";
import management from "../models/management.js";

export const getManagenent = async (req, res) => {
    try {
        const allManagement = await management.find();
        res.status(200).json(allManagement);
    }
    catch (err) {
        res.status(404).json({ message: err.message })
        console.log(err)
    }

}

export const addManagement = async(req, res) => {
    console.log(req.body);
    const managementData = req.body;
    const newManagement = new management({...managementData});
    try {
        await newManagement.save();
        res.status(201).json(newManagement);
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const updateManagement = async (req, res) => {
    const { id } = req.params;
    const { img, name, position, desc, message, email, phone, linkedIn } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedManagement = { img, name, position, desc, message, email, phone, linkedIn, _id: id };

    await management.findByIdAndUpdate(id, updatedManagement, { new: true });

    res.json(updatedManagement);
}

export const deleteManagement = async(req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    await management.findByIdAndRemove(id);
    res.json({message: 'Post Deleted Successfully'})
}