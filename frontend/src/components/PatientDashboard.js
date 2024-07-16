import React, { useState, useEffect } from 'react';
import { getAllDoctors } from '../services/apiService';
import AppointmentForm from './AppointmentForm';
import { createAppointment } from '../services/apiService';
import './PatientDashboard.css' ; // Import the CSS file
import Header from './Header';
import Footer from './Footer';

const PatientDashboard = () => {
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getAllDoctors();
        setDoctors(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchDoctors();
  }, []);

  const handleAppointmentBooked = async (appointmentData) => {
    try {
      const createdAppointment = await createAppointment(appointmentData);
      console.log('Appointment booked successfully:', createdAppointment);
    } catch (error) {
      console.error('Error creating appointment:', error);
    }
  };

  return (
    <div>
      <Header />
    <div className="container">
      
      <h2>Doctor List</h2>
      {error && <p className="error">{error}</p>}
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.uid}>
            <p>Name: {doctor.displayName}</p>
            <p>Email: {doctor.email}</p>
            <p>Doctor ID: {doctor.uid}</p>
          </li>
        ))}
      </ul>
      <div className="appointment-form">
        <AppointmentForm onAppointmentBooked={handleAppointmentBooked} />
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default PatientDashboard;
