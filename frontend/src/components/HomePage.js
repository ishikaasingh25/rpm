import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      
      <header className="homepage-header">
        <h1>Welcome to Our Healthcare Service</h1>
        <p>Your health is our priority. We provide top-notch medical care and a seamless appointment booking system.</p>
      </header><NavBar />
      
      <section className="introduction">
        <p>
          Our mission is to provide exceptional medical care and foster a seamless connection between patients and healthcare providers. With our user-friendly platform, you can easily book appointments, access your health records, and communicate with your doctor. We prioritize your health and well-being, ensuring that you receive the best care possible.
        </p>
        <div className="features">
          <div className="feature">
            <h2>Easy Appointment Booking</h2>
            <p>Book appointments with your preferred doctor in just a few clicks. Our intuitive system ensures a hassle-free experience.</p>
          </div>
          <div className="feature">
            <h2>Comprehensive Dashboard</h2>
            <p>Our doctor dashboard provides healthcare professionals with a complete overview of their patients, making it easier to manage appointments and patient information.</p>
          </div>
          <div className="feature">
            <h2>24/7 Support</h2>
            <p>Our dedicated support team is available around the clock to assist you with any questions or concerns you may have.</p>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="feature">
          <h2>LOGIN (for existing users)</h2>
          <p>Schedule your appointments easily with our user-friendly booking system.</p>
          <Link to="/login" className="feature-link">LOGIN</Link>
        </div>
        <div className="feature">
          <h2>SIGNUP (if you are new)</h2>
          <p>Doctors can manage patient information and appointments efficiently.</p>
          <Link to="/signup" className="feature-link">SIGNUP</Link>
        </div>
        <div className="feature">
          <h2>Contact Us</h2>
          <p>Have questions? Get in touch with our support team for assistance.</p>
          <Link to="/contact" className="feature-link">Contact Support</Link>
        </div>
      </section>
      <section className="additional-content">
        <h2>Why Choose Us?</h2>
        <p>
          We are dedicated to providing the best healthcare services to our patients. Our experienced doctors, modern facilities, and advanced technology ensure that you receive the highest quality care. Join our community and take control of your health today.
        </p>
      </section>
    </div>
  );
};

export default HomePage;
