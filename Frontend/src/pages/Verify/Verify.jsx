// import React, { useContext, useEffect } from 'react'
// import './Verify.css'
// import { useNavigate, useSearchParams } from 'react-router-dom'
// // import { StoreContext } from './../../components/context/StoreContext';
// import StoreContextProvider from '../../context/StoreContext';
// import axios from 'axios';

// const Verify = () => {

//     const [searchParams, setSearchParams] = useSearchParams();
//     const success = searchParams.get("success")
//     const orderId = searchParams.get("orderId")
//     const {url} = useContext(useContext);
//     const navigate = useNavigate();

//     const verifyPayment = async () =>{
//         const response = await axios.post(url+"/api/order/verify",{success, orderId});
//         if(response.data.success){
//             navigate('/myorders');
//         }
//         else{
//             navigate('/')
//         }
//     }

//     useEffect(()=>{
//         verifyPayment();
//     },[])
   
//   return (
//     <div className='verify'>
//         <div className="spinner"></div>
//     </div>
//   )
// }

// export default Verify


import React, { useContext, useEffect } from 'react';
import './Verify.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext'; // Correct import
import axios from 'axios';

const Verify = () => {
    const [searchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const { url } = useContext(StoreContext); // Correct context usage
    const navigate = useNavigate();

    const verifyPayment = async () => {
        try {
            const response = await axios.post(`${url}/api/order/verify`, { success, orderId });

            if (response.data.success) {
                navigate('/myorders');
            } else {
                navigate('/');
            }
        } catch (error) {
            console.error("Payment verification failed:", error);
            navigate('/');
        }
    };

    useEffect(() => {
        if (success && orderId) {
            verifyPayment();
        } else {
            navigate('/'); // Redirect if params are missing
        }
    }, [success, orderId, url]); // Added dependencies

    return (
        <div className='verify'>
            <div className="spinner"></div>
        </div>
    );
};

export default Verify;
