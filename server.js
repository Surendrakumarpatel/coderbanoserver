import app from "./app.js";
import mongoose from "mongoose";
import cloudinary from "cloudinary";
import Razorpay from "razorpay";
import NodeCron from "node-cron";
import { Stats } from "./models/Stats.js";

mongoose.set('strictQuery',true);
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
     
})
.then(()=>{
    console.log("connected");
}).catch((err)=>{
    console.log(err);
})

cloudinary.v2.config({
    cloud_name:process.env.COUDINARY_CLIENT_NAME,
    api_key:process.env.COUDINARY_CLIENT_API,
    api_secret:process.env.COUDINARY_CLIENT_SECRET,
});


// Create Razorpay Instance
export const instance = new Razorpay({
    key_id:process.env.RAZORPAY_API_KEY,
    key_secret:process.env.RAZORPAY_API_SECRET,
});

// every month created new 1 date
NodeCron.schedule("0 0 0 1 * *",async ()=>{
    try {
        await Stats.create({});
    } catch (error) {
        console.log(error);
    }
     
});
 

app.listen(process.env.PORT, ()=>{
 console.log(`Server is working on port: ${process.env.PORT}`);
});
