import userModel from './../models/userModel.js';

// const addToCart = async (req, res) => {
//     try {
//         let userData = await userModel.findById(req.body.userId);
//         let cartData = userData;

//         if (!cartData[req.body.itemId]) {
//             cartData[req.body.itemId] = 1;
//         } else {
//             cartData[req.body.itemId] += 1;
//         }

//         await userModel.findByIdAndUpdate(req.body.userId, { cartData });

//         res.json({ success: true, message: "Added to Cart" });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "Error" });
//     }
// };

const addToCart = async (req, res) => {
    try {
        const { userId, itemId } = req.body;

        // Validate input
        if (!userId || !itemId) {
            return res.status(400).json({ success: false, message: "User ID and Item ID are required" });
        }

        let userData = await userModel.findById(userId);

        // Check if user exists
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Get cart data safely
        let cartData = userData.cartData || {}; 

        // Update cart quantity
        cartData[itemId] = (cartData[itemId] || 0) + 1;

        // Update user document
        await userModel.findByIdAndUpdate(userId, { cartData });

        res.json({ success: true, message: "Added to Cart" });
    } catch (error) {
        console.error("Error in addToCart:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

// remove items from user Cart
const removeFromCart = async (req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData;
        if(cartData[req.body.itemId>0]){
            cartData[req.body.itemId]-=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"Item Remove from Cart"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

// fetch user Cart Data......................
const getCart = async (req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData;
        res.json({success:true,cartData})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})  
    }
}
export {addToCart,removeFromCart,getCart}