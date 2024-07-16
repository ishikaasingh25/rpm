const UserModel = require('../models/userModel');
const SensorDataModel = require('../models/sensorDataModel');

class DoctorService {
  static async getPatients(doctorId) {
    const users = await UserModel.getUsersByRole('patient');
    return users.filter(user => user.doctorId === doctorId);
  }

  static async getPatientData(patientId) {
    const data = await SensorDataModel.getSensorData(patientId);
    return data;
  }
}

module.exports = DoctorService;
