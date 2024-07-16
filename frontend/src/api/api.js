// src/api/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000', // Replace with your backend server URL
  timeout: 5000,
   // Timeout in milliseconds (optional)
   headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
