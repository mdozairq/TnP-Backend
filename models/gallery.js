import mongoose from 'mongoose';

const gallerySchema = mongoose.Schema({
    title:{
        type: String,
        unique: true,
        required: true
    },
    category:{
        type: String,
    },
    desc:{
        type: String,
    },
    image: {
        type: String,
        required: true,
    }
}, { timestamps: true })

const gallery = mongoose.model('gallery', gallerySchema);
export default gallery;