// C:\Users\dheer\food-delivery-app\frontend\src\screens\HomeScreen.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FoodCard from '../components/FoodCard'; // Make sure the path is correct
import './HomeScreen.css'; // Import the CSS we created

const HomeScreen = () => {
    // State to store all food items from the backend
    const [foods, setFoods] = useState([]);
    // State to store the currently selected category
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Fetch food data from the backend when the component loads
    const fetchFoodList = async () => {
        try {
            const response = await axios.get("http://localhost:4000/api/food/list");
            if (response.data.success) {
                setFoods(response.data.data);
            }
        } catch (error) {
            console.error("Error fetching food list:", error);
        }
    };

    useEffect(() => {
        fetchFoodList();
    }, []);

    // Get a unique list of categories from the food items
    const categories = ['All', ...new Set(foods.map(food => food.category))];

    // Filter the food items based on the selected category
    const filteredFoods = selectedCategory === 'All'
        ? foods
        : foods.filter(food => food.category === selectedCategory);

    return (
        <div className='home-container'>
            <h1>Our Menu</h1>

            {/* Category Buttons */}
            <div className='category-container'>
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Food Items Grid */}
            <div className='food-grid'>
                {filteredFoods.map(food => (
                    <FoodCard key={food._id} food={food} />
                ))}
            </div>
        </div>
    );
};

export default HomeScreen;