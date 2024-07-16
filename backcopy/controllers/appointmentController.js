const AppointmentModel = require('../models/appointmentModel');

exports.createAppointment = async (req, res) => {
  try {
    const { doctorId, patientId, date, time, reason } = req.body;
    const appointmentData = {
      doctorId,
      patientId,
      date,
      time,
      reason,
      createdAt: new Date().toISOString(),
    };
    const newAppointment = await AppointmentModel.createAppointment(appointmentData);
    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAppointmentsByDoctor = async (req, res) => {
  try {
    const doctorId = req.params.doctorId;
    const appointments = await AppointmentModel.getAppointmentsByDoctor(doctorId);
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAppointmentsByPatient = async (req, res) => {
  try {
    const patientId = req.params.patientId;
    const appointments = await AppointmentModel.getAppointmentsByPatient(patientId);
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
