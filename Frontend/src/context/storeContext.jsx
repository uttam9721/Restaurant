
// import { createContext, useEffect, useState } from "react";
// // import { food_list } from "../assets/assets";
// import { food_list } from './../assets/assets';
// import axios from 'axios'
// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState({}); // Corrected syntax
//   const url = "http://localhost:4000"
//   const [token,setToken]=useState("");
//   const [food_list,setFoodList]=useState()

//   // Add to Cart
//   const addToCart = (itemId) => {
//     if (!cartItems[itemId]) {
//       setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
//     } else {
//       setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 })); 
//     }
//   };

//   // Remove from Cart
//   const removeFromCart = (itemId) => {
//     setCartItems((prev) => {
//       const updatedCart = { ...prev, [itemId]: prev[itemId] - 1 };
//       if (updatedCart[itemId] <= 0) delete updatedCart[itemId];
//       return updatedCart;
//     });
//   };

//   const getTotalCartAmount=()=>{
//     let totalAmount = 0;
//     for(const item in cartItems){
//       if(cartItems[item]>0){
//         // totalAmount += food_list[item].price * cartItems[item];
//         let itemInfo = food_list.find((product)=>product._id===item)
//         totalAmount += itemInfo.price * cartItems[item];
//       }
//     }
//     return totalAmount;
//   }

//   const fetchFoodList=async()=>{
//     const response = await axios.get(url+"/api/food/list");
//     setFoodList(response.data.data);
//   }


//   useEffect(()=>{
   
    
//     async function loadData(){
//       await fetchFoodList
//       if(localStorage.getItem("token")){
//         setToken(localStorage.getItem("token"));
//     }
//     }
//     loadData();

//   },[])

//   const contextValue = {
//     food_list,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//     url,
//     token,
//     setToken
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;



import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]); // Initialize as an empty array

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

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) { // Check if itemInfo is found
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async () => {
    const response = await axios.get(url + "/api/food/list");
    setFoodList(response.data.data); // Ensure this matches your API response structure
  };

  useEffect(() => {
    async function loadData() {
      await fetchFoodList(); // Call the function
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;