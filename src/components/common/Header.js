import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <h2>BEER <span className="Header-title">APP</span></h2>
      </Link>
    </div>
  );
}

export default Header;
