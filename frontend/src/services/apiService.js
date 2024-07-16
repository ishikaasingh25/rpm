// apiService.js

import axios from '../api/api';

const baseURL = 'http://localhost:8000'; // Replace with your backend URL

const api = axios.create({
  baseURL,
  timeout: 5000, // Optional timeout
});

const signup = async (userData) => {
  try {
    const response = await api.post('/auth/signup', userData);
    return response.data; // Assuming backend returns data in JSON format
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const login = async (userData) => {
  try {
    const response = await api.post('/auth/login', userData);
    return response.data; // Assuming backend returns data in JSON format
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
const getAllPatients = async () => {
  try {
    const response = await axios.get('/patient/patients');
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.error : error.message);
  }
};

const getAllDoctors = async () => {
  try {
    const response = await axios.get('/doctor/doctors');
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.error : error.message);
  }
};

export const createAppointment = async (appointmentData) => {
  try {
    const response = await api.post('/api/appointments', appointmentData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAppointmentsByDoctor = async (doctorId) => {
  try {
    const response = await api.get(`/api/appointments/doctor/${doctorId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAppointmentsByPatient = async (patientId) => {
  try {
    const response = await api.get(`/api/appointments/patient/${patientId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getTemperatureData = async (patientId) => {
  try {
    const response = await api.get(`/api/temperature-data/${patientId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching temperature data:', error);
    throw new Error('Failed to fetch temperature data');
  }
};
export { signup, login,getAllPatients,getAllDoctors };
