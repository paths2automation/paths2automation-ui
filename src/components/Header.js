import React from 'react';
import '../css/Header.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import logo from '../images/logo.svg';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Home from '../components/Home';
import Company from '../components/Company';
import Resources from '../components/Resources';
import Product from '../components/Product';

function Header() {
  return (
    <BrowserRouter>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h1>Path2Automation</h1>
        </div>
        <nav className="nav-links">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/company">Company</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/company" element={<Company />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Header;