import mongoose from 'mongoose';

const placementSchema = mongoose.Schema({
    branch:{
        type: String,
        required: true
    },
    batch:{
        type: Number,
        required: true
    },
    total:{
        type: Number,
        required: true
    },
    placed:{
        type: Number,
        required: true
    },
    trained:{
        type: Number,
    },
},{ timestamps: true })

const placement = mongoose.model('placement', placementSchema);
export default placement;