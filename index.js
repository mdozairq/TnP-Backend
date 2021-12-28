import express from "express";
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import adminRoutes from './routes/admin.js'


const app = express();
dotenv.config();


app.use(express.json({limit:"50mb", extended: true}));
app.use(express.urlencoded({limit: "50mb", extended: true}));
//app.use(express.json());
app.use(cors());


app.use('/admin', adminRoutes);

app.get('/', (req, res)=>{
    res.send("All API for TPO GCE");
})
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>app.listen(PORT, ()=>console.log(`Server is running on Port: ${PORT}`)))
.catch((error)=> console.log(error.message));

//mongoose.set('useFindAndModify', false);
