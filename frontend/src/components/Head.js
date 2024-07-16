import React from 'react';
import './Head.css'; // Import the CSS file for styling

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
      
        <h1>HEALTH GAUGE</h1>
        <h2></h2>
        <h3>Empowering Health Monitoring: Track Your Vital Metrics with Precision</h3>
        

        <nav>
        
          
        </nav>
    
    </header>
  );
};

export default Header;
