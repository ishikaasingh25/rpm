import React, { useState, useEffect } from 'react';
import { getAppointmentsByPatient } from '../services/apiService';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const data = await getAppointmentsByPatient(patiendId); // Implement this function in apiService
        setAppointments(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchAppointments();
  }, [patientId]);

  return (
    <div>
      <h2>Upcoming Appointments</h2>
      {error && <p>{error}</p>}
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            <p>Doctor ID: {appointment.doctorID}</p>
            <p>Doctor: {appointment.doctorName}</p>
            <p>Date: {new Date(appointment.appointmentDate).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
