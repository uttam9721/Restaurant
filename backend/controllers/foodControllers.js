import foodModel from "../models/foodModel.js";
import fs from 'fs'

// add food item

export const addFood = async(req,res) => {
    let image_filename = `${req,file.filename}`

    const food = new foodModel({
        name: req.body.name,
        price: req.body.price,
        image: image_filename,
        description: req.body.description,
        category: req.body.category

    })
    try {
        await food.save();
        res.json({success:true,message:"Food added"})
        
    } catch (error) {
        console.log(error)
        res.json({Success:false,message:"Error"})
    }

}
