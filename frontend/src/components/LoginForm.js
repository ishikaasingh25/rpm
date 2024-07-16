// src/components/LoginForm.js
import React, { useState } from 'react';
import { login } from '../services/apiService';
import { useNavigate } from 'react-router-dom';
import Header from './Head';
import Footer from './Foot';
import './LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userData = { email, password };
      const data = await login(userData);
      const { role, token } = data;
      localStorage.setItem('token', token);
      console.log('Logged in successfully:', data);
      alert("Logged in Successfully");
      if (role === 'patient') {
        navigate('/patient-dashboard'); // Redirect to patient dashboard
      } else if (role === 'doctor') {
        navigate('/doctor-dashboard'); // Redirect to doctor dashboard
      } else {
        setError('Unknown role');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <Header />
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <label htmlFor="email" className="label">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="input"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="label">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="input"
              required
            />
          </div>
          <button type="submit" className="button">Login</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default LoginForm;

