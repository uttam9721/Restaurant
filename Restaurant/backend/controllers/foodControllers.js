
import foodModel from "../models/foodModel.js";
import fs from 'fs'
// Add food item
const addFood = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, message: "File not uploaded" });
    }

    const image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        price: req.body.price,
        image: image_filename,
        description: req.body.description,
        category: req.body.category
    });

    try {
        await food.save();
        res.json({ success: true, message: "Food added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error saving food item" });
    }
}

// food list ............................

const listFood=async(req,res)=>{
    try {
        const foods =await foodModel.find({})
        res.json({
            success:true,
            data:foods,
        })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:"Error"
        })
    }
}

// Remove food items ;
const removeFood=async(req,res)=>{
    try {
        const food =await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Food Removed"})
        
    }catch(error) {
        console.log(error)
        res.json({success:false,message:"Error"})  
    }
}

export { addFood,listFood,removeFood};
