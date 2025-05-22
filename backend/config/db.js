import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://um8794907:uttam262903@cluster0.54lnu.mongodb.net/restuarant')
    .then(()=>{
        console.log('mongodb is connected...')
    }).catch(err =>console.log("err"));
    // }).catch(err =>console.log("err"));
    
}