import mongoose from 'mongoose';

const managementSchema = mongoose.Schema({
    img:{
        type:String,
    },
    name:{
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    desc:{
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
}, { timestamps: true })

const management = mongoose.model('management', managementSchema);
export default management;