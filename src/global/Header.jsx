import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/contact" className="contact-btn">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
