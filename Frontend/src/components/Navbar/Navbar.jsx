// import React, { useContext, useState } from 'react'
// import './Navbar.css'
// import {assets} from '../../assets/assets'
// import {Link} from 'react-router-dom'
// import { StoreContext } from '../../context/StoreContext'
// const Navbar = ({setShowLogin}) => {
//     const [menu ,setMenu]=useState("Home");
//     const [getTotalCartAmount,token,setToken]=useContext(StoreContext);
//   return (
//     <div className='navbar'>
//       <a href='/'>
//         <img src={assets.logo} alt="" className='logo'/></a>
//       <ul className="navbar-menu">
//         <Link to={'/'} onClick={()=>setMenu("Home")} className={menu=="Home"?"active":""}>Home</Link>
//         <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu=="Menu"?"active":""}>Menu</a>
//         <a href='#app-download' onClick={()=>setMenu("Mobile-app")} className={menu=="Mobile-app"?"active":""}>Mobile-app</a>
//         <a href='#footer' onClick={()=>setMenu("Contact-us")} className={menu=="Contact-us"?"active":""}>Contact us</a>
//       </ul>
//       <div className="navbar-right">
//         <img src={assets.search_icon} alt="search" />
//         <div className="navbar-search-icon">
//           <Link to={'/cart'}><img src={assets.basket_icon} alt="" /></Link>
//             <div className="dot"></div>
//         </div>
//         {!token?<button onClick={()=>setShowLogin(true)}>Sign in</button>:
//         <div className='navbar-profile'>
//           <img src={assets.profile_icon} alt="profile" />
//           <ul className='nav-profile-dropdown'>
//             <li>
//               <img src={assets.bag_icon} alt="bag" />
//             </li>
//             <hr />
//             <li>
//               <img src={assets.logout_icon} alt="logout" />
//             </li>
//           </ul>
          
//           </div>}
        
//       </div>
//     </div>
//   )
// }

// export default Navbar


import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('Home');
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext); // Corrected destructuring

  return (
    <div className="navbar">
      {/* Logo Section */}
      <a href="/">
        <img src={assets.logo} alt="Logo" className="logo" />
      </a>

      {/* Menu Links */}
      <ul className="navbar-menu">
        <Link 
          to="/" 
          onClick={() => setMenu('Home')} 
          className={menu === 'Home' ? 'active' : ''}
        >
          Home
        </Link>
        <a 
          href="#explore-menu" 
          onClick={() => setMenu('Menu')} 
          className={menu === 'Menu' ? 'active' : ''}
        >
          Menu
        </a>
        <a 
          href="#app-download" 
          onClick={() => setMenu('Mobile-app')} 
          className={menu === 'Mobile-app' ? 'active' : ''}
        >
          Mobile-app
        </a>
        <a 
          href="#footer" 
          onClick={() => setMenu('Contact-us')} 
          className={menu === 'Contact-us' ? 'active' : ''}
        >
          Contact us
        </a>
      </ul>

      {/* Right Section: Search, Cart, and Profile */}
      <div className="navbar-right">
        {/* Search Icon */}
        <img src={assets.search_icon} alt="Search" className="navbar-search-icon" />

        {/* Cart Icon */}
        <div className="navbar-cart">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
          <div className="dot"></div>
        </div>

        {/* Profile Section */}
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="Profile" />
            <ul className="nav-profile-dropdown">
              <li>
                <img src={assets.bag_icon} alt="Orders" />
                Orders
              </li>
              <hr />
              <li onClick={() => setToken(null)}> {/* Logout functionality */}
                <img src={assets.logout_icon} alt="Logout" />
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
