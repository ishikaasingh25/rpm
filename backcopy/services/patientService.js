const UserModel = require('../models/userModel');

class PatientService {
  static async getPatients() {
    const patients = await UserModel.getPatients();
    return patients;
  }
}

module.exports = PatientService;
