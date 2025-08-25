// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className='logo'>Foodie Hub</h1>
      <div className='navbar-right'>
        <a href='#'>Login</a>
        <a href='#' className='cart-link'>Cart (0)</a>
      </div>
    </div>
  );
};

export default Navbar;