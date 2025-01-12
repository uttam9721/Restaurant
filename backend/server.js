
// import express from 'express';
// import { connectDB } from './config/db.js'; // Ensure you have this file properly set up
// import cors from 'cors';
// import foodRouter from './routes/foodRoute.js';
// import path from 'path';
// import { fileURLToPath } from 'url'; // Needed for __dirname in ES modules

// // App config
// const app = express();
// const port = 4000;

// // Handle __dirname in ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Middleware
// app.use(express.json()); // To parse JSON payloads
// app.use(cors()); // To allow cross-origin requests

// // Serve static files from the uploads directory
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Connect to the database
// connectDB(); // Ensure your connectDB function works properly

// // API routes
// app.use('/api/food', foodRouter); // Routing for food-related endpoints

// // Root route
// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });


import express from 'express';
import { connectDB } from './config/db.js'; // Ensure the DB config is correct
import cors from 'cors';
import foodRouter from './routes/foodRoute.js';
import path from 'path';
import { fileURLToPath } from 'url'; // Handle __dirname in ES modules

// Handle __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// App config
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'uploads'))); // Static file serving

// Connect to the database
connectDB(); // Ensure your DB connection is correctly set up

// API routes
app.use('/api/food', foodRouter);

// Root route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
