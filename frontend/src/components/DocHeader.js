import React from 'react';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  // Function to handle smooth scrolling to a given target ID
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      
        <h1>Doctor's Dashboard</h1>
        <nav>
        <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#appointments">Appointments</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#profile">Profile</a></li>
          </ul>
          
        </nav>
    
    </header>
  );
};

export default Header;