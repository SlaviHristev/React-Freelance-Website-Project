import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'

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
}


app.listen(6000, () =>{
    connectDB();
    console.log('Server is running...');
})