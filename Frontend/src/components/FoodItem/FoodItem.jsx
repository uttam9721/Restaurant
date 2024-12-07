import React,{useState,useContext} from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const FoodItem = ({id,name,price,description,image}) => {

    // const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img src={image} alt="" className="food-item-img" />
        {!cartItems[id]
            ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} atl=""/>
            :<div className='food-item-counter'>
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems(id)}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>
            // </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
      <p className="food-item desc">{description}</p>
      <p className='food-item-price'>₹1{price}</p>
      </div>
    </div>
  )
}

export default FoodItem


// import React, { useContext } from "react";
// import "./FoodItem.css";
// import {assets} from "../../assets/assets";
// import { StoreContext } from "../../context/StoreContext";

// const Food_Item = ({ id, name, price, description, image }) => {
//   const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

//   return (
//     <div className="food-item">
//       <div className="food-item-img-container">
//         <img src={image} alt="" className="food-item-image" />
//         {!cartItems[id] ? (
//           <img
//             className="add"
//             onClick={() => addToCart(id)}
//             src={assets.add_icon_white}
//             alt="add-icon"
//           />
//         ) : (
//           <div className="food-item-counter">
//             <img
//               onClick={() => removeFromCart(id)}
//               src={assets.remove_icon_red}
//               alt="remove-icon"
//             />
//             <p>{cartItems[id]}</p>
//             <img
//               onClick={() => addToCart(id)}
//               src={assets.add_icon_green}
//               alt="add-icon"
//             />
//           </div>
//         )}
//       </div>
//       <div className="food-item-info">
//         <div className="food-item-name-rating">
//           <p>{name}</p>
//           <img src={assets.rating_stars} alt="rating" />
//         </div>
//         <p className="food-item-desc">{description}</p>
//         <p className="food-item-price">{price}</p>
//       </div>
//     </div>
//   );
// };

// export default Food_Item;
