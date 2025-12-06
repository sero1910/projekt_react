// src/components/Navbar.jsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
    { path: "/", name: "O Mnie", brand: "Portfolio" }, 
    { path: "/projekty", name: "Projekty", brand: "Serodziński" },
    { path: "/zainteresowania", name: "Zainteresowania", brand: "Serodziński" },
    { path: "/kontakt", name: "Kontakt", brand: "Serodziński" },
];

const Navbar = () => {
    const location = useLocation();
    const currentBrand = navLinks.find(link => link.path === location.pathname)?.brand || "Portfolio";
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    {currentBrand}
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {navLinks.map((link) => (
                            <li key={link.path} className="nav-item">
                                <Link 
                                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`} 
                                    to={link.path}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;