import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.js'
import reviewRoute from './routes/review.js'
import conversationRoute from './routes/conversation.js'
import messageRoute from './routes/message.js'
import gigRoute from './routes/gig.js'
import orderRoute from './routes/order.js'
import authRoute from './routes/auth.js'
import cookieParser from 'cookie-parser';
import cors from 'cors';
import multer from "multer";
import uploadRoute from './routes/upload.js'

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        const uploadDir = path.join(__dirname, "../public/upload");
        cb(null, uploadDir);
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname);
    },
});


  

const upload = multer({storage: storage})


const app = express();
dotenv.config();
mongoose.set('strictQuery', true);

const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to DB');
    } catch (error) {
        console.log(error);
    }
};

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: "http://localhost:5173",credentials:true}))

app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);
app.use("/api/auth", authRoute);
app.use("/api/upload", uploadRoute)

app.use((err,req,res,next) =>{
    const errStatus = err.status || 500;
    const errMessage = err.message || 'Something went wrong!';

    return res.status(errStatus).send(errMessage)
})
// app.post("/api/public/upload", upload.single("file"), (req,res) =>{
//     const file = req.file;
//     res.status(200).json(file.filename)
// })


app.listen(8800, () =>{
    connectDB();
    console.log('Server is running...');
})