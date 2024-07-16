// Example in patientController.js
const UserModel = require('../models/userModel');

exports.getAllPatients = async (req, res) => {
  try {
    const patients = await UserModel.getPatients();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
