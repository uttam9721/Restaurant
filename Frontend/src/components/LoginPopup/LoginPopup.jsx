import React,{useState} from 'react'
import './LoginPopup.css';
import { assets } from '../../assets/assets';
const LoginPopup = ({setShowLogin}) => {
    const [currentState,setCurrentState] =useState('Sign up')
  return (
    <div className='lopi-popup'>
        <form className='login-popup-container' >
            {/* <div className=""> */}
                <div className="login-popup-title">
                {currentState}
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currentState==="Login"?<></>: <input type='text' placeholder='Your Name'/>}
                    <input type="text" placeholder="Your Name"  required/> <br />
                    <input type="email" placeholder="Your Email" required/> <br />
                    <input type="password" placeholder="Your Password" required/> <br />
                </div>
                <button>{currentState==="Sign Up"?"Create Account":"Login"}</button>
                <div className="login-pop-condition">
                    <input type="checkbox" required />
                    <p>By continuing, i agree to the terms of use & privacy policy</p>
                </div>
                {currentState==="Login"?
                <p>Create a new account ?  <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>:
                <p>Already have an account?  <span onClick={()=>setCurrentState("Login")}>Login here</span></p>}
                
                
            {/* </div> */}
        </form>
      
    </div>
  )
}

export default LoginPopup
