
import React from 'react';
import './Navbar.css';
import {assets } from '../../assets/assets'; // Adjust keys based on the actual asset names

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="Logo" />
      <h1>Admin Panel</h1>
      <img className="profile" src={assets.profileImage} alt="Profile Image" />
    </div>
  );
};

export default Navbar;
