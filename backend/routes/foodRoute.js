
import express from 'express';
import { addFood,listFood,removeFood } from '../controllers/foodControllers.js';
import multer from 'multer';

const foodRouter = express.Router();

// Image storage configuration
const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads'); // Correct folder name ('uploads') should match your static directory setup
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`); // Correct template literal syntax
    },
});

// Multer upload configuration
const upload = multer({ storage: Storage });

// Route to handle file upload and add food
foodRouter.post('/add', upload.single('image'), addFood);

// get all food
foodRouter.get('/list',listFood);

// remove food 
foodRouter.post('/remove',removeFood)


export default foodRouter;
