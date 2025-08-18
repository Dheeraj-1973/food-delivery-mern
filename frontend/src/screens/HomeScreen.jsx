import { useState, useEffect } from 'react';
import axios from 'axios';
import FoodCard from '../components/FoodCard';

function HomeScreen({ addToCart }) {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get('/api/food/getallfoods');
        setFoods(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error('Error fetching data:', error);
        setFoods([]);
      }
    };
    fetchFoods();
  }, []);

  return (
    <div>
      <h1>Menu</h1>
      <div className="menu-grid">
        {foods.map((food) => (
          <FoodCard key={food._id} food={food} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;