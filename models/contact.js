import mongoose from 'mongoose';

const contactSchema = mongoose.Schema({
    email1:{
        type: String,
        required: true
    },
    email2:{
        type: String,
    },
    phone1:{
        type: Number,
        required: true
    },
    phone2:{
        type: Number,
    },
    website:{
        type: String,
        required: true
    },
    address:{
        type: String,
    },
},{ timestamps: true })

const contact = mongoose.model('contact', contactSchema);
export default contact;