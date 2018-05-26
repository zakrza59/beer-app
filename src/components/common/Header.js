import React from 'react';
import logo from './logo.png';
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      <img src={logo} alt="logo" className="Header-logo" />
      <h2>Beer-app</h2>
    </div>
  );
}

export default Header;
