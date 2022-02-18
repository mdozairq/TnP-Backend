import mongoose from 'mongoose';

const announcementSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    desc:{
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

const announcements = mongoose.model('announcements', announcementSchema);
export default announcements;