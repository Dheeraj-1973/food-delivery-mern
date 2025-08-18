import React from 'react';

function FoodCard({ food, addToCart }) {
  return (
    <div className="food-card">
      <img src={food.image} alt={food.name} className="food-image" />
      <div className="food-details">
        <h2>{food.name}</h2>
        <p>{food.description}</p>
        <div className="food-actions">
          <h3>Price: ₹{food.price}</h3>
          <button className="add-to-cart-btn" onClick={() => addToCart(food)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;