import mongoose from "mongoose";

export const connectDB = mongoose.connect("mongodb+srv://surendra:iit@143heart@cluster0.kyqpgg9.mongodb.net/coderbano?retryWrites=true&w=majority")
.then(()=>{
    console.log("connected");
}).catch((err)=>{
    console.log("no connection");
})