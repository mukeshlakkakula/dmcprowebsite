// src/components/Navbar.js
import React, { useState } from 'react';
import './index.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <nav className="navbar">
                <div className="logo-container">
                    <img src="https://res.cloudinary.com/djlhr4ycg/image/upload/v1716195912/DMCpro.logo-removebg-preview_k1uasp.png" alt="Company Logo" className="logo-img" />
                    <div className="company-name">Dmcpro.in</div>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    <div className={`bar1 ${isOpen ? 'change' : ''}`}></div>
                    <div className={`bar2 ${isOpen ? 'change' : ''}`}></div>
                    <div className={`bar3 ${isOpen ? 'change' : ''}`}></div>
                </div>
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#example">Example</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
