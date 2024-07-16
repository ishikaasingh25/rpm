// src/components/AppointmentForm.js
import moment from 'moment';
import React, { useState } from 'react';
import { createAppointment } from '../services/apiService';
import './AppoinmentForm.css';

const AppointmentForm = () => {
  const [doctorId, setDoctorId] = useState('');
  const [patientId, setPatientId] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [createdAppointment, setCreatedAppointment] = useState(null);
  const [bookingError, setBookingError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const appointmentData = { doctorId, patientId, appointmentDate };
      const newAppointment = await createAppointment(appointmentData);
      setCreatedAppointment(newAppointment);
      setBookingError('');
      alert('Appointment booked successfully!');
      // Optionally reset form fields or perform any other actions after booking
    } catch (error) {
      console.error('Error creating appointment:', error);
      alert('Failed to book appointment. Please try again.');
      setBookingError('Failed to book appointment. Please try again.');
    }
  }
 
  console.log('Created Appointment:', createdAppointment);
  return (
    <div>
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Doctor ID:
          <input type="text" value={doctorId} onChange={(e) => setDoctorId(e.target.value)} required />
        </label>
        <label>
          Patient ID:
          <input type="text" value={patientId} onChange={(e) => setPatientId(e.target.value)} required />
        </label>
        <label>
          Appointment Date:
          <input type="datetime-local" value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} required />
        </label>
        <button type="submit">Book Appointment</button>
      </form>

      {createdAppointment && (
        <div>
          <h3>Booked Appointment Details</h3>
          <p><strong>Appointment ID:</strong> {createdAppointment.appointmentId}</p>
          <p><strong>Message:</strong> {createdAppointment.message}</p>
         
        </div>
      )}

      {bookingError && <p>{bookingError}</p>}

    </div>
  );
};

export default AppointmentForm;
