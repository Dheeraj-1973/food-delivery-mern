import React from 'react';
import './Navbar.css';

function Navbar({ cartItemCount, currentUser }) {

  const logoutHandler = () => {
    localStorage.removeItem('currentUser');
    window.location.href = '/login';
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">Foodie Hub</a>
      </div>
      <div className="navbar-links">
        {currentUser ? (
          // If user is logged in, show their name and a logout button
          <div className="navbar-user">
            <span>{currentUser.name}</span>
            <button className="logout-btn" onClick={logoutHandler}>Logout</button>
          </div>
        ) : (
          // If no user is logged in, show the Login link
          <a href="/login">Login</a>
        )}
        <a href="/cart">Cart ({cartItemCount})</a>
      </div>
    </nav>
  );
}

export default Navbar;