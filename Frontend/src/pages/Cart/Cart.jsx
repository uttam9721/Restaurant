import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext';
import { food_list } from '../../assets/assets';
const Card = () => {

  const { cartItem, food_list, removeFromCart } = useContext(StoreContext);

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          // if(cartItem[item._id]>0)
         {
          return(
            <div className='cart-item-title-cart-items-item'>
              <p>{item.name}</p>
            </div>
  
            )
         }
        })}
      </div>

      
    </div>
  )
}

export default Card
