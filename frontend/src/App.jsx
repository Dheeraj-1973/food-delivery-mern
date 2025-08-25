// src/App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import FoodItem from './components/FoodItem';
import './App.css';

const App = () => {
    const [foods, setFoods] = useState([]);
    const [category, setCategory] = useState('All');

    const fetchFoodList = async () => {
        try {
            // --- THIS IS THE CORRECTED LINE ---
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/food/list`);
            
            if (response.data.success) {
                setFoods(response.data.data);
                console.log("Food data fetched successfully!");
            }
        } catch (error) {
            console.error("Error fetching food list:", error);
        }
    };

    useEffect(() => {
        fetchFoodList();
    }, []);

    const categories = ['All', ...new Set(foods.map(food => food.category))];

    return (
        <div className='app'>
            <Navbar />
            <div className='menu-container'>
                <h1>Our Menu</h1>
                <div className='category-container'>
                    {categories.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setCategory(item)}
                            className={category === item ? 'active' : ''}
                        >
                            {item}
                        </button>
                    ))}
                </div>
                <hr />
                <div className='food-display-list'>
                    {foods.filter(item => category === 'All' || category === item.category).map((item) => (
                        <FoodItem key={item._id} food={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;
