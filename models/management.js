import mongoose from 'mongoose';

const managementSchema = mongoose.Schema({
    img:
    {
        data: Buffer,
        contentType: String
    },
    name:{
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    description:{
        type: String,
    },
    message:{
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
    },
    linkedIn:{
        type: String,
    },
    Social:[{
        type: String,
    }],   
}, { timestamps: true })

const management = mongoose.model('banner', managementSchema);
export default management;