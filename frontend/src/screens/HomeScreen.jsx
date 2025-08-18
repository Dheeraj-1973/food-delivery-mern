import { useState, useEffect } from 'react';
import axios from 'axios';
// We can import a Food component if we create one, for now, we'll style inline
// import Food from '../components/Food'; 

function HomeScreen({ addToCart }) {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        // This is the critical line we are changing
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/api/food/getallfoods`);
        setFoods(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data. Please try again later.');
        setLoading(false);
        console.error("Error fetching data:", err);
      }
    };

    fetchFoods();
  }, []); // Empty array means this runs only once on component load

  return (
    <div>
      {loading ? (
        <p>Loading menu...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {foods.map((food) => (
            <div key={food._id} style={{ border: '1px solid #ddd', margin: '10px', padding: '15px', width: '300px', borderRadius: '8px' }}>
              <h2>{food.name}</h2>
              <p>{food.description}</p>
              <p><strong>Price: ₹{food.price}</strong></p>
              <button onClick={() => addToCart(food)}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomeScreen;