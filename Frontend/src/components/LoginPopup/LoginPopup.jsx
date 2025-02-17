// import React, { useContext, useState } from 'react';
// // import './LoginSignupPage.css';
// import './LoginPopup.css';
// import { StoreContext } from '../../context/StoreContext';
// import axios from 'axios'
// const LoginSignupPage = () => {

//   const {url}=useContext(StoreContext)


//   const [isLogin, setIsLogin] = useState(true);
//   const [data,setData] = useState({
//     name:"",
//     email: "",
//     password: "",
//   });

//   const onChangeHandler = (event)=>{
//     const name=event.target.name;
//     const value=event.target.value;
//     setData((prevData)=>{
//       return{
//         ...prevData,
//         [name]:value
//         }
//         });
//   }
//   const onLogin = async(event)=>{
//     event.preventDefault();
//     let newUrl = url;
//     if(currState=="Login"){
//       newUrl+="api/user/login"
//     }else{
//       newUrl +="api/user/register"
//     }
//     const response = await axios.post(newUrl,data);
//     if(response.data.success){
//       setToken(response.data.token);
//       localStorage.setItem("token",response.data.token);
//       setIsLogin(false)

//     }else{
//       alert(response.data.message);
//     }

//   }

//   return (
//     <div className="auth-container">
//       <div className="auth-box">
//         <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
//         <form onSubmit={onLogin}>
//           {!isLogin && (
//             <input 
//             name='name'
//             onChange={onChangeHandler}
//             value={data.name}
//               type="text"
//               placeholder="Your Name"
//               className="auth-input"
//               required
//             />
//           )}
//           <input
//             type="email"
//             name='email'
//             onChange={onChangeHandler}
//             value={data.email}
//             placeholder="Your Email"
//             className="auth-input"
//             required
//           />
//           <input
//             type="password"
//             name='password'
//             onChange={onChangeHandler}
//             value={data.password}
//             placeholder="Your Password"
//             className="auth-input"
//             required
//           />
//           <button type="submit" className="auth-button">
//             {isLogin ? 'Login' : 'Sign Up'}
//           </button>
//         </form>
//         <p className="auth-footer">
//           {isLogin
//             ? "Don't have an account? "
//             : 'Already have an account? '}
//           <span
//             className="auth-link"
//             onClick={() => setIsLogin(!isLogin)}
//           >
//             {isLogin ? 'Sign Up' : 'Login'}
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginSignupPage;


import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPopup.css'; // Ensure this file has the appropriate styles
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import { assets } from './../../assets/assets';

// const LoginSignupPage = () => {
//   const { url } = useContext(StoreContext);
//   const navigate = useNavigate();

//   const [isLogin, setIsLogin] = useState(true);
//   const [data, setData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const onChangeHandler = (event) => {
//     const { name, value } = event.target;
//     setData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const onLogin = async (event) => {
//     event.preventDefault();
//     try {
//       const endpoint = isLogin ? '/api/user/login' : '/api/user/register';
//       const response = await axios.post(`${url}${endpoint}`, data);

//       if (response.data.success) {
//         localStorage.setItem('token', response.data.token);
//         toast.success(isLogin ? 'Login Successful!' : 'Sign Up Successful!', {
//           position: 'top-right',
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//         setData({ name: '', email: '', password: '' });

//         // Navigate to the home page after successful login/signup
//         setTimeout(() => navigate('/'), 3000); // Delay navigation to show toast
//       } else {
//         toast.error(response.data.message, {
//           position: 'top-right',
//           autoClose: 3000,
//         });
//       }
//     } catch (error) {
//       console.error('Error during authentication:', error);
//       toast.error('Something went wrong. Please try again.', {
//         position: 'top-right',
//         autoClose: 3000,
//       });
//     }
//   };

//   return (
//     <div className="auth-container">
//       <ToastContainer /> {/* Add ToastContainer for notifications */}
//       <div className="auth-box">
//         <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
//         <form onSubmit={onLogin}>
//           {!isLogin && (
//             <input
//               name="name"
//               type="text"
//               placeholder="Your Name"
//               value={data.name}
//               onChange={onChangeHandler}
//               className="auth-input"
//               required
//             />
//           )}
//           <input
//             name="email"
//             type="email"
//             placeholder="Your Email"
//             value={data.email}
//             onChange={onChangeHandler}
//             className="auth-input"
//             required
//           />
//           <input
//             name="password"
//             type="password"
//             placeholder="Your Password"
//             value={data.password}
//             onChange={onChangeHandler}
//             className="auth-input"
//             required
//           />
//           <button type="submit" className="auth-button">
//             {isLogin ? 'Login' : 'Sign Up'}
//           </button>
//         </form>
//         <p className="auth-footer">
//           {isLogin ? "Don't have an account? " : 'Already have an account? '}
//           <span
//             className="auth-link"
//             onClick={() => setIsLogin(!isLogin)}
//           >
//             {isLogin ? 'Sign Up' : 'Login'}
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginSignupPage;


const LoginPopup = ({setShowLogin}) => {

  const {url, setToken} = useContext(StoreContext)

  const [currentState, setCurrentState] = useState('Login')
  const [data, setData] = useState({
      name:"",
      email:"",
      password:""
  })

  const onChangeHandler = (event) =>{
      const name = event.target.name
      const value = event.target.value 
      setData(data=>({...data,[name]:value}))
  }

 const onLogin = async (event) =>{
      event.preventDefault()
      let newUrl = url;
      if(currentState==='Login'){
          newUrl+= "/api/user/login"
      }else{
          newUrl += "/api/user/register"
      }

      const response = await axios.post(newUrl,data);

      if(response.data.success){
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token)
          setShowLogin(false);
      }else{
          alert(response.data.message);
      }
    }
return (
  <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
          <div className="login-popup-title">
              <h2>{currentState}</h2>
              <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
          </div>
          <div className="login-popup-inputs">
              {currentState==='Login'?<></>: <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required />}
             
              <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required />
              <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
          </div>

          <button type='submit'>{currentState==='Sign Up'?'Create account':'Login'}</button>
          <div className="login-popup-condition">
              <input type="checkbox" required />
              <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>
          {currentState==='Login'?
           <p>Create a new account? <span onClick={()=> setCurrentState('Sign Up')}>Click here</span></p>
           :<p>Already have an account? <span onClick={()=> setCurrentState('Login')}>Login here</span></p>}
          
          
      </form>
  </div>
)
}

export default LoginPopup

