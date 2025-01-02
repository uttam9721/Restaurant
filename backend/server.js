import express from 'express'
// import mongoose from 'mongoose';
// import { config } from 'dotenv';
import {connectDB} from './config/db.js'
import cors from 'cors'
import foodRouter from './routes/foodRoute.js';


// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json())
app.use(cors())

// connectDB()
connectDB()


// api
app.use('/api/food',foodRouter)
app.use("/images".express.static('uploads'))



app.get('/',(req,res) => {
    res.send('Hello World')
})






app.listen(port,()=>{
    console.log("port on running on 4000");
})