import jwt, { decode } from "jsonwebtoken";
import ErrorHandler from "../utils/errorHandler.js";
import { catchAsyncError } from "./catchAsyncError.js";
import {User} from "../models/User.js";

export const isAuthenticated = catchAsyncError(async (req,res,next)=>{
    const {token} = req.cookies;
    
    if(!token){
      return next(new ErrorHandler("User Not Logged In", 401));
    }

    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    req.user = await User.findById(decoded._id);

    next();
})

export const authorizeSubscribers = (req,res,next)=>{
  if(req.user.subscription.status !== "active" && req.user.role !== "admin")
    return next(new ErrorHandler(`Only subscriber can access this lecture`), 403);

  next();
}
export const authorizeAdmin = (req,res,next)=>{
  if(req.user.role !== "admin")
    return next(new ErrorHandler(`${req.user.name}, Sorry! only admin can access`), 403);

  next();
}