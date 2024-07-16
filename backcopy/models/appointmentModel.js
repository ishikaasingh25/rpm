const { db } = require('../config/firebaseConfig');

class AppointmentModel {
  static async createAppointment(appointmentData) {
    try {
      const appointmentRef = db.collection('appointments').doc();
      await appointmentRef.set(appointmentData);
      return appointmentData;
    } catch (error) {
      console.error('Error creating appointment:', error);
      throw error;
    }
  }

  static async getAppointmentsByDoctor(doctorId) {
    const snapshot = await db.collection('appointments').where('doctorId', '==', doctorId).get();
    return snapshot.docs.map(doc => doc.data());
  }

  static async getAppointmentsByPatient(patientId) {
    const snapshot = await db.collection('appointments').where('patientId', '==', patientId).get();
    return snapshot.docs.map(doc => doc.data());
  }
}

module.exports = AppointmentModel;
