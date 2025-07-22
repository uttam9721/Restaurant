// import React, { useContext, useState,useEffect } from 'react'
// import './PlaceOrder.css'
// import { StoreContext } from '../../context/StoreContext'
// import { useNavigate } from "react-router-dom";

// // import useNavigate from 'react-router-dom'
// // import { food_list } from './../../assets/assets';
// const PlaceOrder = () => {
//   const {getTotalCartAmount,token,food_list,cartItems,url}=useContext(StoreContext)
//   const [data,setData]=useState({
//     firstName:"",
//     lastName:"",
//     email:"",
//     street:"",
//     city:"",
//     state:"",
//     pinCode:"",
//     country:"",
//     phone:""
//   })

//   const onChangeHandler=(event)=>{
//     const name=event.target.name;
//     const value=event.target.value;
//     setData(data=>({...data,[name]:value}))
//   }

//   const placeOrder = async (event) =>{
//     event.preventDefault();
//     let orderItems = [];
//     food_list.map((item, index)=>{
//       if(cartItems[item._id]>0){
//         let itemInfo = item;
//         itemInfo["quantity"] = cartItems[item._id];
//         orderItems.push(itemInfo);
//       }
//     })
//     console.log(orderItems)
//     let orderData = {
//       address:data,
//       items:orderItems,
//       amount:getTotalCartAmount()+2,
//     }

//     let response = await axios.post(url+'/api/order/place', orderData,{headers:{token}})
//     if(response.data.success){
//       const {session_url} = response.data;
//       window.location.replace(session_url);
//     }
//     else{
//       alert('Error')
//     }
//   }

//   const navigate = useNavigate();

//   useEffect(()=>{
//     if(!token){
//       navigate('/cart')
//     }else if(getTotalCartAmount()===0){
//       navigate('/cart')
//     }
//   },[token])


//   return (
//   //   <div className='place-order'>
//   //     <div className="place-order-left">
//   //       <p className='title'>
//   //         Delivery Information 
//   //       </p>
//   //       <div className="multi-fields">
//   //         <input name='firstName' onChangeHandler={onChangeHandler} value={data.firstName} type="text" placeholder='First Name' />
//   //         <input  type="text"  placeholder='Last Name'/>
//   //       </div>
//   //         <input type="text"  placeholder='Email address'/>
//   //         <input type="text"  placeholder='Street'/>
//   //         <div className="multi-fields">
//   //         <input type="text" placeholder='City' />
//   //         <input type="text"  placeholder='State'/>
//   //       </div>
//   //       <div className="multi-fields">
//   //         <input type="number" placeholder='pincode' />
//   //         <input type="text"  placeholder='Country'/>
//   //       </div>
//   //       <input type="text" placeholder='phone Number' />
//   //     </div>
//   //     <div className="place-order-right">
//   //     <div className="cart-total">
//   //   <h2>Cart Totals</h2>
//   //   <div>
//   //     <div className="cart-total-details">
//   //       <p>Subtotal</p>
//   //       <p>₹ {getTotalCartAmount()}</p>
//   //     </div>
//   //     <hr />
//   //     <div className="cart-total-details">
//   //       <p>Delivery Fee</p>
//   //       <p>₹ {getTotalCartAmount()===0?"0":50}</p>
//   //     </div>
//   //     <hr />
//   //     <div className="cart-total-details">
//   //       <b>Total</b>
//   //       <b>₹ {getTotalCartAmount()===0?"0":getTotalCartAmount()+30}</b>
//   //     </div>
//   //   </div>
//   //   <button>PROCEED TO PAY</button>
//   // </div>
//   //     </div>
      
//   //   </div>

//   <form onSubmit={placeOrder} className='place-order'>
//   <div className="place-order-left">
//     <p className="title">Delivery Information</p>
//     <div className="multi-fields">
//       <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First Name'/>
//       <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last Name'/>
//     </div>
//     <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email address'/>
//     <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street'/>
//     <div className="multi-fields">
//       <input required name='city' onChange={onChangeHandler} value={data.city}  type="text" placeholder='City'/>
//       <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State'/>
//     </div>
//     <div className="multi-fields">
//       <input required name='pinCode' onChange={onChangeHandler} value={data.pincode} type="text" placeholder='Zip code'/>
//       <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country'/>
//     </div>
//     <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone' />
//   </div>
//   <div className="place-order-left">
//   <div className="cart-total">
//       <h2>Cart Total</h2>
//       <div>
//       <div className="cart-total-detail">
//           <p>Subtotal</p>
//           <p>${getTotalCartAmount()}</p>
//         </div>
//         <hr />
//         <div className="cart-total-detail">
//           <p>Delivery Fee</p>
//           <p>${getTotalCartAmount()===0?0:2}</p>
//         </div>
//         <hr />
//         <div className="cart-total-detail">
//           <b>Total</b>
//           <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
//         </div> 
//       </div>
//       <button type='submit'>PROCEED TO PAYMENT</button>
//     </div>
//   </div>
// </form>
//   )
// }

// export default PlaceOrder



import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    pinCode: '',
    country: '',
    phone: '',
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];

    food_list.forEach((item) => {
      if (cartItems[item._id] > 0) {
        orderItems.push({ ...item, quantity: cartItems[item._id] });
      }
    });

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };

    try {
      let response = await axios.post(`${url}/api/order/place`, orderData, { headers: { token } });
      if (response.data.success) {
        window.location.replace(response.data.session_url);
      } else {
        alert('Error placing order');
      }
    } catch (error) {
      console.error('Order error:', error);
      alert('Failed to place order');
    }
  };

  useEffect(() => {
    if (!token || getTotalCartAmount() === 0) {
      navigate('/cart');
    }
  }, [token, getTotalCartAmount, navigate]);

  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type='text' placeholder='First Name' />
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type='text' placeholder='Last Name' />
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} type='email' placeholder='Email address' />
        <input required name='street' onChange={onChangeHandler} value={data.street} type='text' placeholder='Street' />
        <div className='multi-fields'>
          <input required name='city' onChange={onChangeHandler} value={data.city} type='text' placeholder='City' />
          <input required name='state' onChange={onChangeHandler} value={data.state} type='text' placeholder='State' />
        </div>
        <div className='multi-fields'>
          <input required name='pinCode' onChange={onChangeHandler} value={data.pinCode} type='text' placeholder='Zip code' />
          <input required name='country' onChange={onChangeHandler} value={data.country} type='text' placeholder='Country' />
        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} type='text' placeholder='Phone' />
      </div>

      <div className='place-order-right'>
        <div className='cart-total'>
          <h2>Cart Total</h2>
          <div>
            <div className='cart-total-detail'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cart-total-detail'>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className='cart-total-detail'>
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button type='submit'>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
