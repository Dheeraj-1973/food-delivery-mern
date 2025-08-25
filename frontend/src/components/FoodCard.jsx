// C:\Users\dheer\food-delivery-app\frontend\src\components\FoodCard.jsx
import React from 'react';
import './FoodCard.css'; // Let's assume you create a simple CSS file for this

const FoodCard = ({ food }) => {
  return (
    <div className='food-card'>
      <img src={`http://localhost:4000/images/${food.image}`} alt={food.name} className='food-card-image' />
      <div className='food-card-content'>
        <h3>{food.name}</h3>
        <p className='food-card-desc'>{food.description}</p>
        <p className='food-card-price'>₹{food.price}</p>
        <button className='add-to-cart-btn'>Add to Cart</button>
      </div>
    </div>
  );
};

export default FoodCard;