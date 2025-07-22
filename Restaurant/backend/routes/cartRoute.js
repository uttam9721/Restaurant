import express from "express"
import { addToCart,removeFromCart,getCart } from "../controllers/cartController.js"
import authMiddleware from "../middleware/auth.js";

const cartRouter = express.Router();


cartRouter.post("/add",addToCart,authMiddleware)
cartRouter.post("/remove",removeFromCart,authMiddleware)
cartRouter.get("/get",getCart,authMiddleware)

export default cartRouter;