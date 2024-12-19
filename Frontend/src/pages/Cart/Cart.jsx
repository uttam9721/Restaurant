import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext';
import { assets, food_list } from '../../assets/assets';
const Card = () => {

  const { cartItems, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);

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
          if(cartItems[item._id]>0)
         {
          return(
            <>
            <div className='cart-items-title cart-items-item'>
             <img src={item.image} alt="img" />
             <p>{item.name}</p>
             <p>₹ 1{item.price}</p>
             <p>{cartItems[item._id]}</p>
             <p>{cartItems[item._id]*item.price}</p>
             <img className='cross' onClick={()=>removeFromCart(item._id)} src={assets.cross_icon} alt="cross" />
            </div>
            <hr />
            </>
            )
         }
        })}
      </div>
      <div className="cart-bottom"> 
  <div className="cart-total">
    <h2>Cart Totals</h2>
    <div>
      <div className="cart-total-details">
        <p>Subtotal</p>
        <p>₹ {getTotalCartAmount()}</p>
      </div>
      <hr />
      <div className="cart-total-details">
        <p>Delivery Fee</p>
        <p>₹ { 30}</p>
      </div>
      <hr />
      <div className="cart-total-details">
        <b>Total</b>
        <b>₹ {getTotalCartAmount()+30}</b>
      </div>
    </div>
    <button>PROCEED TO CHECKOUT</button>
  </div>
  <div className="cart-promocode">
    <div>
      <p>If you have Promo Code, Enter it here</p>
      <div className="cart-promocode-input">
        <input type="text" placeholder="Enter Promo Code" />
        <button>APPLY</button>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Card
