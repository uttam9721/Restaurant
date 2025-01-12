import React,{useState} from 'react'
import './Add.css'
import { assets } from '../../assets/assets'

const Add = () => {
    const [image,setImage]=useState(false);
    const [data,setData]=useState({
        name:"",
        description:"",
        price:"",
        category:"salad"

    });

  return (
    <div className='add'>
        <form action="" className='flex-col'>
            <div className="add-img-upload flex-col">
            <p>Upload Image</p>
            <label htmlFor="image">
                {/* for show img =>src={image?URL.createObjectURL(image) */}
                <img src={image?URL.createObjectURL(image):assets.uploadArea} alt="upload" />
            </label>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
            <div className="add-product-name flex-col">
                <p>Product Name</p>
                <input type="text" name='name' placeholder='Type here' />
            </div>
            <div className="add-product-description flex-col">
                <p>Product Description</p>
                <textarea name="description" rows="6" placeholder='write content here ' required></textarea>
            </div>
            <div className="add-category-price">
                <div className="add-category flex-col">
                    <p>Category</p>
                    <select name="category">
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
                    <input type="Number" name='price' placeholder='₹ 100' />
                </div>
            </div>
            <button className='add-btn ' type="submit">Add</button>
            </div>
        </form>
      
    </div>
  )
}

export default Add
