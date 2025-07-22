import React from 'react'
import './Footer.css';
import { assets } from '../../assets/assets';
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="logo" />
                <p>Lorem ipsum dolor sit, amet consectetur
                     adipisicing elit. Libero tempore 
                     accusantium exercitationem id ipsa
                      aliquam eaque cupiditate quidem quae
                       facere?</p>
                       <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="facebook" />
                        <img src={assets.twitter_icon} alt="twitter" />
                        <img src={assets.linkedin_icon} alt="linke" />
                       </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 000-111-2222</li>
                    <li>Contact@gmail.com</li>
                </ul>
            </div>
        </div>
        <br />
        <br />
        <hr />
        <br />
        <p className="footer-copyright-text">
            @ Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat veniam est perspiciatis reiciendis, hic autem! Mollitia dignissimos magnam eum.
        </p>
      
    </div>
  )
}

export default Footer
