import React from 'react'
import './PlaceOrder.css'
const PlaceOrder = () => {
  return (
    <div className='place-order'>
      <div className="palce-order-left">
        <p className='title'>
          Delivery Information 
        </p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text"  placeholder='Last Name'/>
        </div>
          <input type="text"  placeholder='Email address'/>
          <input type="text"  placeholder='Street'/>
          <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text"  placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input type="number" placeholder='pincode' />
          <input type="text"  placeholder='Country'/>
        </div>
        <input type="text" placeholder='phone Number' />
      </div>
      <div className="place-order-right"></div>
      
    </div>
  )
}

export default PlaceOrder
