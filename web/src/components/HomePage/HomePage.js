import React, { useState } from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import './HomePage.css';
import Navbar from '../Navbar/NavBar';

function HomePage({ user, onLogout }) {
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <div className="home-page">
          <Navbar user={user} onLogout={onLogout}/>
    </div>
  );
}

export default HomePage;


