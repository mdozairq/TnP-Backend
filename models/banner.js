import mongoose from 'mongoose';

const bannerSchema = mongoose.Schema({
    title:{
        type: String,
        unique: true,
        required: true
    },
    image: {
        type: String,
        required: true,
    }
}, { timestamps: true })

const banner = mongoose.model('banner', bannerSchema);
export default banner;
