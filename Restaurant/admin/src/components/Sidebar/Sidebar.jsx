import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <Link to={'/add'} className="sidebar-option">
            <img src={assets.addIcon} alt="add" />
            <p>Add item</p>
        </Link>
        <Link to={'/list'} className="sidebar-option">
            <img src={assets.orderIcon} alt="list" />
            <p>List Item</p>
        </Link>
           <Link to='/orders'>
        <div className="sidebar-option">
           <img src={assets.orderIcon} alt="order" />
           <p>Orders</p>
        </div> 
           </Link>
      </div>
    </div>
  )
}

export default Sidebar
