import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.js'
import reviewRoute from './routes/review.js'
import conversationRoute from './routes/conversation.js'
import messageRoute from './routes/message.js'
import gigRoute from './routes/gig.js'
import orderRoute from './routes/order.js'

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

app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);



app.listen(6000, () =>{
    connectDB();
    console.log('Server is running...');
})