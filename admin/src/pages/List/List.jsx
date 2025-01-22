// import React, { useEffect, useState } from 'react'
// import './List.css'
// import {toast} from 'react-toastify'
// import axios from 'axios'
// import { assets } from '../../assets/assets'
// const List = () => {

//     const url = "http://localhost:4000";
//   const [list,setList]= useState([]);

//   const fetchList = async() =>{

//     const response = await axios.get(`${url}/api/food/list`);
//     // console.log(response.data)
//     if(response.data.success){
//       setList(response.data.data)
//     }
//     else{
//       toast.error("Error")
//     }
//   }
//   useEffect(()=>{
//     fetchList();

//   },[])

//   // remove cross functionality
//   const removeFood=async()=>{
//     const response = await axios.post(`${url}/api/food/remove`,{id:foodId});
//     await fetchList();

//   }

//   return (
//     <div className='list add flex-col'>
//       <p>All Foods List</p>
//       <div className="list-table">
//         <div className="list-table-format title">
//           <b>Image</b>
//           <b>Name</b>
//           <b>Category</b>
//           <b>Price</b>
//           <b>Action</b>
//         </div>
//         {list.map((item,index)=>{
//           return(
//             <div key={index}  className="list-table-format">
//               <img src={`${url}/images/`+item.image} alt="img" />
//               <p>{item.name}</p>
//               <p>{item.category}</p>
//               <p>₹{item.price}</p>
//               <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>  
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default List



import React, { useEffect, useState } from 'react';
import './List.css';
import { toast } from 'react-toastify';
import axios from 'axios';

const List = () => {
  const url = "http://localhost:4000";
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error fetching food list");
      }
    } catch (error) {
      console.error("Error fetching food list:", error);
      toast.error("An error occurred while fetching food list");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
      if (response.data.success) {
        toast.success("Food removed successfully");
        await fetchList();
      } else {
        toast.error("Failed to remove food");
      }
    } catch (error) {
      console.error("Error removing food:", error);
      toast.error("An error occurred while removing food");
    }
  };

  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => (
          <div key={index} className="list-table-format">
            <img src={`${url}/images/` + item.image} alt="img" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>₹{item.price}</p>
            <p onClick={() => removeFood(item._id)} className='cursor'>X</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
