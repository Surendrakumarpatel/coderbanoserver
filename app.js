import express  from "express";
import {config} from "dotenv";
import ErrorMiddleware from "./middlewares/error.js ";
import cookieParser from "cookie-parser";
import cors from "cors"


config({
    path:"./config/config.env"
})

const app = express();

// using middlewares
app.use(express.json());
app.use(
    express.urlencoded({
        extended:true,
    })
);
app.use(cookieParser());
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

// importing & using routes
import course from "./routes/courseRoutes.js";
import user from "./routes/userRoutes.js"
import payment from "./routes/paymentRoutes.js";
import other from "./routes/otherRoutes.js"
 

app.use("/api/v1",course); // localhost:4000/api/v1
app.use("/api/v1",user);
app.use("/api/v1",payment);
app.use("/api/v1",other);
 

export default app;

app.use(ErrorMiddleware)
