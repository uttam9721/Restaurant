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
import { useNavigate } from 'react-router-dom';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('Home');
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext); // Corrected destructuring
 const navigate=useNavigate();
  const logout=()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/");


  }



  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
          Home
        </Link>
        <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>
          Menu
        </a>
        <a href="#app-download" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>
          Mobile-app
        </a>
        <a href="#footer" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>
          Contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={()=>navigate('/myorders')}>
                <img src={assets.bag_icon} alt="bag-icon" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="logout" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );  
};

export default Navbar;
