import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from 'cors'

import userRoutes from "./routes/userRoutes.js"
import formRoutes from "./routes/formRoutes.js"
import responseRoutes from './routes/responseRoutes.js'

dotenv.config();

const app=express();

const corsOptions = {
    origin: 'http://localhost:8081', // Replace with your frontend URL
    credentials: true, // Allow credentials (cookies, authorization headers, TLS client certificates)
    
  };

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

app.use(userRoutes);
app.use(formRoutes);
app.use(responseRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("backend is up and running");
    });
})
.catch((e)=>{
    console.log(e);
})