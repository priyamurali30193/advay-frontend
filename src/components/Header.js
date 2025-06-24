import React from 'react';
import './Header.css';
import logo from './logo.png';
const Header = () => {
    console.log("Header is rendering");

  return (
    <header className="site-header">
      <div className="container">
             <img src={logo} alt="Logo" className="logo-img" />
        <h1 className="logo">Advay Traders</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/order-online">Order Online</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
