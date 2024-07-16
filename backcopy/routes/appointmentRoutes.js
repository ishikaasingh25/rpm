// appointmentRoutes.js

const express = require('express');
const router = express.Router();
const { db } = require('../config/firebaseConfig'); // Assuming you've initialized Firestore

// POST /api/appointments - Create a new appointment
router.post('/', async (req, res) => {
  try {
    const { doctorId, patientId, appointmentDate } = req.body;

    // Validate input (if needed)

    // Convert appointmentDate to a Date object
    const appointmentDateObj = new Date(appointmentDate);

    // Create appointment data object
    const appointmentData = {
      doctorId,
      patientId,
      appointmentDate: appointmentDateObj,
      // Add other appointment details as needed
    };

    // Save appointment data to Firestore
    const appointmentRef = await db.collection('appointments').add(appointmentData);

    // Respond with success message
    res.status(201).json({ message: 'Appointment created successfully', appointmentId: appointmentRef.id });
  } catch (error) {
    console.error('Error creating appointment:', error);
    res.status(500).json({ error: 'Failed to create appointment' });
  }
});

// GET /api/appointments/doctor/:doctorId - Get appointments by doctorId
router.get('/doctor/:doctorId', async (req, res) => {
  try {
    const { doctorId } = req.params;

    // Query appointments for the specific doctorId
    const snapshot = await db.collection('appointments').where('doctorId', '==', doctorId).get();
    const appointments = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.status(200).json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ error: 'Failed to fetch appointments' });
  }
});

// GET /api/appointments/patient/:patientId - Get appointments by patientId
router.get('/patient/:patientId', async (req, res) => {
  try {
    const { patientId } = req.params;

    // Query appointments for the specific patientId
    const snapshot = await db.collection('appointments').where('patientId', '==', patientId).get();
    const appointments = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.status(200).json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ error: 'Failed to fetch appointments' });
  }
});

module.exports = router;
