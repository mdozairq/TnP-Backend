import mongoose from "mongoose";
import contact from "../models/contact.js";

export const getContact = async (req, res) => {
    try {
        const allContact = await contact.find();
        res.status(200).json(allContact);
    }
    catch (err) {
        res.status(404).json({ message: err.message })
        console.log(err)
    }
}

export const createContact = async(req, res) => {
    console.log(req.body);
    const post = req.body;
    const newContact = new contact({...post})

    try {
        await newContact.save();
        res.status(201).json(newContact);
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const updateContact = async (req, res) => {
    const { id } = req.params;
    const {branch, batch, total, placed, trained  } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedContact = { branch, batch, total, placed, trained, _id: id };

    await contact.findByIdAndUpdate(id, updatedContact, { new: true });

    res.json(updatedContact);
}

export const deleteContact = async(req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    await contact.findByIdAndRemove(id);
    res.json({message: 'Post Deleted Successfully'})
}