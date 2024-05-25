import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-container">
          <img
            src="https://res.cloudinary.com/djlhr4ycg/image/upload/v1716195912/DMCpro.logo-removebg-preview_k1uasp.png"
            alt="Company Logo"
            className="logo-img"
          />
          <div className="company-name">Dmcpro.in</div>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar1 ${isOpen ? "change" : ""}`}></div>
          <div className={`bar2 ${isOpen ? "change" : ""}`}></div>
          <div className={`bar3 ${isOpen ? "change" : ""}`}></div>
        </div>
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/#about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/#services" onClick={toggleMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/#example" onClick={toggleMenu}>
              Example
            </Link>
          </li>
          <li>
            <Link to="/#contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;