import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";


// Login user
const loginUser = async(req,res) => {

    
}
const createToken=(id)=>{

}


//  Registeruser
const registerUser = async(req,res) => {
    const {name,password,email} = req.body;
    try {
        const exist = await userModel.findOne({email});
        if(exist) {
            return res.status(400).json({success:true,msg:"Email already exist"})
            }
            if(!validator.isEmail(email)){
                return res.json({success:false,msg:"Invalid email"})
            }
            if(password.length < 8){
                return res.json({success:false,msg:"Password must be at least 8 characters long"})
            }
            const salt = await bcrypt.gensalt(10)
            const hashPassword =await bcrypt.hash(password,salt);

            const newUser = new userModel({
                name:name,
                email:email,
                password:hashPassword
            })
            const savedUser = await newUser.save();
            const token = createToken(user._id)
            res.json({success:true,token})
    } catch (error) {
        console.log(error)
        res.json({success:false,msg:"Error"})
        
    }

}

export {loginUser,registerUser};