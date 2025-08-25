// src/components/FoodItem.jsx
import React from 'react';
import './FoodItem.css';

const FoodItem = ({ food }) => {
  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={`http://localhost:4000/images/${food.image}`} alt={food.name} />
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{food.name}</p>
        </div>
        <p className='food-item-desc'>{food.description}</p>
        <p className='food-item-price'>₹{food.price}</p>
         <button className='add-to-cart-btn'>Add to Cart</button>
      </div>
    </div>
  );
};

export default FoodItem;