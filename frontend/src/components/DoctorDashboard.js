import React, { useState, useEffect } from 'react';
import { getAllPatients, getTemperatureData } from '../services/apiService';
import './DoctorDashboard.css';
import DocHeader from './DocHeader';
import Footer from './Footer';

const DoctorDashboard = () => {
  const [patients, setPatients] = useState([]);
  const [temperatureData, setTemperatureData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const patientsData = await getAllPatients();
        setPatients(patientsData);

        // Fetch temperature data for the first patient initially
        if (patientsData.length > 0) {
          const temperature = await getTemperatureData(patientsData[0].patient_id);
          setTemperatureData(temperature);
        }
      } catch (error) {
        setError(error.message);
      }
    };
    fetchPatients();
  }, []);

  const handlePatientSelect = async (patientId) => {
    try {
      const temperature = await getTemperatureData(patientId);
      setTemperatureData(temperature);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
   <DocHeader />
      <h2>Doctor Dashboard</h2>

      <div className="patients-list">
        <h3>Patient List</h3>
        {error && <p>{error}</p>}
        <ul>
          {patients.map((patient) => (
            <li key={patient.patient_id} onClick={() => handlePatientSelect(patient.patient_id)}>
              <p>Name: {patient.displayName}</p>
              <p>Email: {patient.email}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="temperature-data">
        <h3>Temperature Data</h3>
        {temperatureData.length > 0 ? (
          <ul>
            {temperatureData.map((data, index) => (
              <li key={index}>
                <p>Patient ID: {data.patient_id}</p>
                <p>Pulse Rate: {data.temperature}</p>
                <p>Timestamp: {data.timestamp}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No temperature data available</p>
        )}
      </div>

       <Footer /> 
    </div>
  );
};

export default DoctorDashboard;
