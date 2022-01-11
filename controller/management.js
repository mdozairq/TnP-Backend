import mongoose from "mongoose";
import management from "../models/management";

export const addManagement = async(req, res) => {
    console.log(req.body);
    const newManagement = new management({
        img:{
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        },
        name:req.body.name,
        position: req.body.position,
        desc: req.body.desc,
        message: req.body.message,
        email: req.body.email,
        phone: req.body.phone,
        linkedIn: req.body.linkedIn,    
    })

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

    res.json(updatedPost);
}