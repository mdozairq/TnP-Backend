import mongoose from 'mongoose';

const downloadSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    filename: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    uuid: {
        type: String,
        required: true
    },
    fileLink:{
        type: String,
        required: true
    }
}, { timestamps: true })

const download = mongoose.model('download', downloadSchema);
export default download;