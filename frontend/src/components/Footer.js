import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="footer-title">About Us</h2>
          <p>
            We are a healthcare service dedicated to providing quality medical
            care and improving patient-doctor relationships.
          </p>
        </div>
        <div className="footer-section links">
          
        </div>
        <div className="footer-section contact">
          <h2 className="footer-title">Contact Us</h2>
          <p>Email: support@healthcare.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Healthcare Service. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
