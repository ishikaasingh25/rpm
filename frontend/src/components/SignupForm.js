import React, { useState, useEffect } from 'react';
import { signup } from '../services/apiService';
import { useNavigate } from 'react-router-dom';
import './SignupForm.css';
import Header from './Head';
import Footer from './Foot';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [role, setRole] = useState('patient');
  const [uid, setUid] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (role === 'patient' || role === 'doctor') {
      document.getElementById('role-section').scrollIntoView({ behavior: 'smooth' });
    }
  }, [role]);

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const userData = { email, password, displayName, role };
      const user = await signup(userData);
      setUid(user.uid);
      console.log('Signed up successfully:', user);
      alert('Signup successful!');
      // navigate('/login');
    } catch (error) {
      setError(error.message || 'An error occurred during signup.');
    } finally {
      setIsLoading(false);
    }
  };

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div>
      <Header />
      <div className="signup-container">
        <div className="signup-box">
          <h2 className="signup-title">Sign Up</h2>
          <form onSubmit={handleSignup} className="signup-form">
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <input
              type="text"
              className="form-control"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Display Name"
              required
            />
            <div className="role-container">
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="form-control role-dropdown"
              >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
              </select>
            </div>
            {(role === 'patient' || role === 'doctor') && (
              <div id="role-section" className="role-section">
                
              </div>
            )}
            <div className="btn-container">
              <button type="submit" className="btn">
                Sign Up
              </button>
            </div>
            {error && <p className="error">{error}</p>}
          </form>

          {uid && (
            <div className="uid-container">
              <h3>Your UID:</h3>
              <p>{uid}</p>
              <button onClick={goToLogin} className="btn">Go to Login</button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignupForm;
