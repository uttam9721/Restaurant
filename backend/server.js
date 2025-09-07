// import express from 'express';
// import { connectDB } from './config/db.js'; // Ensure the DB config is correct
// import cors from 'cors';
// import foodRouter from './routes/foodRoute.js';
// import path from 'path';
// import { fileURLToPath } from 'url'; // Handle __dirname in ES modules
// import userRouter from './routes/userRoute.js';
// import 'dotenv/config'
// import cartRouter from './routes/cartRoute.js';
// import orderRouter from './routes/orderRoute.js';
// // Handle __dirname in ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // App config
// const app = express();

// const port = 5000;

// // Middleware
// app.use(express.json());
// // app.use(express.json());
// app.use(cors());
// app.use('/api/food', foodRouter);
// app.use('/images', express.static(path.join(__dirname, 'uploads'))); // Static file serving
// app.use("/api/user",userRouter)
// app.use("/api/cart",cartRouter)
// app.use("/api/order",orderRouter)
// // Connect to the database
// connectDB(); // Ensure your DB connection is correctly set up


// // Root route
// app.get('/', (req, res) => {
//     res.send('Hello World');
// });
// // });



// // Start the server
// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });




import express from 'express';
import { connectDB } from './config/db.js';
import cors from 'cors';
import foodRouter from './routes/foodRoute.js';
import path from 'path';
import { fileURLToPath } from 'url';
import userRouter from './routes/userRoute.js';
import dotenv from 'dotenv';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use('/api/food', foodRouter);
app.use('/images', express.static(path.join(__dirname, 'uploads')));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

connectDB();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
