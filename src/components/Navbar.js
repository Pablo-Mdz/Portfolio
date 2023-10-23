
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navigation">
      <div className="logo">Logo</div>
      <div className="menu-items">
        <a className="about" href="about">About</a>
        <a className="work" href="#projects">Projects</a>
        <a className="contact" href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;

