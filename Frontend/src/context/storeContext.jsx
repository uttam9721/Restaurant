// import { createContext, useEffect, useState } from "react";
// // import { StoreContext } from './storeContext';
// import { food_list } from "../assets/assets";

// export const StoreContext = createContext(null)

// const StoreContextProvider = (props)=>{

//     const {cartItems,setCartItems}=useState({})

// // AddToCart 

//     const addToCart =(itemId)=>{
//         if(!cartItems[itemId]){
//             setCartItems((prev)=>({...prev,[itemId]:1}))
//         }else{
//             setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
//         }
//     }

//     // remove to cart
//     const removeFromCart = (itemId) => {
//             setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
//         }
        
// useEffect(()=>{
//     console.log(cartItems);
//     },[cartItems])
//     const contextValue ={
//         food_list,
//         cartItems,
//         setCartItems,
//         addToCart,
//         removeFromCart
        
//     }
//     return(
//         <StoreContext.Provider value={contextValue}>
//             {props.children}
//         </StoreContext.Provider>
//     )
// }

// export default StoreContextProvider;

import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({}); // Corrected syntax

  // Add to Cart
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  // Remove from Cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] - 1 };
      if (updatedCart[itemId] <= 0) delete updatedCart[itemId];
      return updatedCart;
    });
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
