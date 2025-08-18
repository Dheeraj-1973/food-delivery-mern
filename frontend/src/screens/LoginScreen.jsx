import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();

    const credentials = {
      email,
      password,
    };

    try {
      // Make the POST request to our backend login API
      const { data } = await axios.post('/api/users/login', credentials);

      // Save the user data and token to localStorage
      // We use JSON.stringify because localStorage can only store strings
      localStorage.setItem('currentUser', JSON.stringify(data));

      // Redirect to the homepage on successful login
      // window.location.href = '/' is a simple way to redirect and refresh the page
      window.location.href = '/';

    } catch (error) {
      console.error('Login failed:', error.response.data);
      alert(error.response.data.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={loginHandler}>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="form-btn">Login</button>
      </form>
    </div>
  );
}

export default LoginScreen;