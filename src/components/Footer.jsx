import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Globe, Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h3>WEAVORAL</h3>
          <p>Weaving comfort into your everyday living. Premium handcrafted home decor made with love and care.</p>
          <div className="social-links">
            <a href="#"><Camera size={20} /></a>
            <a href="#"><Globe size={20} /></a>
          </div>
        </div>
        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/custom-order">Custom Order</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <ul>
            <li><Phone size={16} /> +94 77 000 0000</li>
            <li><Mail size={16} /> hello@weavoral.com</li>
            <li><MapPin size={16} /> Colombo, Sri Lanka</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Weavoral. All rights reserved. Crafted by Antigravity.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
