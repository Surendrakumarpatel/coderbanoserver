import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter course title"],
        maxLength: [80, "Title can't exceed 80 characters"],
    },
    description: {
        type: String,
        required: [true, "Please enter post description"],
        minLength: [20, "Description must be at least 20 characters"],
    },
    date: {
        type: String,
   },
    content:{
       type:String,
       required: [true, "Please enter course title"],
    //    minLength: [20, "Title must be at least 20 characters"],
    },
    
    banner: {
        public_id: {
            type: String,
            required: false,
        },
        url: {
            type: String,
            required: false,
        },
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

     
});

export const BlogPost = mongoose.model("BlogPost", schema);