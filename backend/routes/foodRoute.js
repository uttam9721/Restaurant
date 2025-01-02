import express from 'express'
import { addFood } from '../controllers/foodControllers.js'
import multer from 'multer'

const foodRouter = express.Router();

// image storage ;
const Storage = multer.diskStorage({
    destination:"upload",
    filename:(req,file,cb)=>{
        return cb(null,`$({Date.now()}${file.originalname})`)
    }
})
const upload = multer({storage:Storage})

foodRouter.post('/add',upload.single("image") ,addFood);


export default foodRouter;
