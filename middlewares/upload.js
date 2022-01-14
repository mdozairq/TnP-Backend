import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname)
    }
});
  
const upload = multer({ 
    storage: storage,
    limit: {fileSize: 100000 * 10},
 });

export default upload;