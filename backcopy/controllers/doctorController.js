const UserModel = require('../models/userModel');

exports.getAllDoctors = async (req, res) => {
  try {
    const doctors = await UserModel.getDoctors();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
