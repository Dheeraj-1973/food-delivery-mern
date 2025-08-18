import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  const [cart, setCart] = useState([]);
  // New state to hold the logged-in user's data
  const [currentUser, setCurrentUser] = useState(null);

  // This useEffect runs once when the app starts
  useEffect(() => {
    const user = localStorage.getItem('currentUser') 
      ? JSON.parse(localStorage.getItem('currentUser')) 
      : null;
    setCurrentUser(user);
  }, []);

  const addToCart = (food) => {
    setCart([...cart, food]);
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Pass the cart count and the current user to the Navbar */}
        <Navbar cartItemCount={cart.length} currentUser={currentUser} />
        <Routes>
          <Route path="/" element={<HomeScreen addToCart={addToCart} />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;