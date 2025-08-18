import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import the hook for navigation

function RegisterScreen() {
  // State for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Initialize the navigate function
  const navigate = useNavigate();

  // This function will be called when the form is submitted
  const registerHandler = async (e) => {
    e.preventDefault(); // Prevents the page from refreshing on submit

    const user = {
      name,
      email,
      password,
    };

    try {
      // Make the POST request to our backend API
      const response = await axios.post('/api/users/register', user);
      console.log(response.data); // Log success message

      alert('Registration successful! Please login.');
      navigate('/login'); // Redirect to login page on success

    } catch (error) {
      // Log the error and show an alert
      console.error('Registration failed:', error.response.data);
      alert(error.response.data.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={registerHandler}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="form-btn">Register</button>
      </form>
    </div>
  );
}

export default RegisterScreen;