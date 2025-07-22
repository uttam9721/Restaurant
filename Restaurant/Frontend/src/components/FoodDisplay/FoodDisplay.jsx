import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    if (!food_list) {
        return <div>Loading...</div>; // Handle the case where food_list is undefined
    }

    return (
        <div className='food-display' id='food-display'>
            <h2>Top Dishes for You</h2>
            <div className="food-display-list">
                {food_list.map((item, index) => {
                    if (category === "All" || category === item.category) {
                        return (
                            <div key={index}>
                                <FoodItem
                                    id={item._id}
                                    name={item.name}
                                    description={item.description}
                                    price={item.price}
                                    image={item.image}
                                />
                            </div>
                        );
                    } else {
                        return null; // Return null if the category doesn't match
                    }
                })}
            </div>
        </div>
    );
};

export default FoodDisplay;