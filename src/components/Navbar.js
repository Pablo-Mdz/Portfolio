
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navigation">
      <div className="logo">Logo</div>
      <div className="menu-items">
        <a className="about" href="#about">About</a>
        <div className="work">Work</div>
        <div className="contact">Contact</div>
      </div>
    </div>
  );
};

export default Navbar;

