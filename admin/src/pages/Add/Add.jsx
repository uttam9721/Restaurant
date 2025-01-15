import React,{useState} from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
const Add = () => {

    const url="http://localhost:4000";
    const [image,setImage]=useState(false);
    const [data,setData]=useState({
        name:"",
        description:"",
        price:"",
        category:"salad"

    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData=new FormData();
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",Number(data.price))
        formData.append("category",data.category)
        formData.append("image",image)
        const response = await axios.post(`${url}/api/food/add`,formData);
        if(response.data.success) {
            setData({
                name:"",
                description:"",
                price:"",
                category:"salad"
            })
            setImage(false);
        }else{
            alert("Failed to add food");
        }

    }

  return (
    <div className='add'>
        <form onSubmit={onSubmitHandler} action="" className='flex-col'>
            <div className="add-img-upload flex-col">
            <p>Upload Image</p>
            <label htmlFor="image">
                {/* for show img =>src={image?URL.createObjectURL(image) */}
                <img src={image?URL.createObjectURL(image):assets.uploadArea} alt="upload" />
            </label>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
            <div className="add-product-name flex-col">
                <p>Product Name</p>
                <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />
            </div>
            <div className="add-product-description flex-col">
                <p>Product Description</p>
                <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='write content here ' required></textarea>
            </div>
            <div className="add-category-price">
                <div className="add-category flex-col">
                    <p>Category</p>
                    <select onChange={onChangeHandler}  name="category">
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Descrts">Descrts</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="Cake">Cake</option>
                        <option value="Pure Veg">Pure Veg</option>
                        <option value="Palse">Palse</option>
                        <option value="Noodles">Noodles</option>
                    </select>
                </div>
                <div className="add-price flex-col">
                    <p>Product-Price</p>
                    <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='₹ 100' />
                </div>
            </div>
            <button className='add-btn ' type="submit">Add</button>
            </div>
        </form>
      
    </div>
  )
}

export default Add














