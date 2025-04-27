import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>School Name</h3>
          <p>Empowering Students for a Better Future</p>
        </div>

        <div className="footer-middle">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#Vision">Our Vision</a></li>
            <li><a href="#form">Form</a></li>
            <li><a href="#Home">Home</a></li>
          </ul>
        </div>

        <div className="footer-right">
          <h4>Contact Us</h4>
          <p>Email: info@schoolname.edu</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: 123 School Street, City, Country</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} School Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
