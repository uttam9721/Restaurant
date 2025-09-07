// import mongoose from "mongoose";

// export const connectDB = async()=>{
//     await mongoose.connect('mongodb+srv://um8794907:uttam262903@cluster0.54lnu.mongodb.net/restuarant')
//     .then(()=>{
//         console.log('mongodb is connected...')
//     }).catch(err =>console.log("err"));
//     // }).catch(err =>console.log("err"));
    
// }

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected...");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
};
