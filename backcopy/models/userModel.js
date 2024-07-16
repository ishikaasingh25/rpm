const { db } = require('../config/firebaseConfig');

class UserModel {
  static async createUser(data) {
    try {
      // Ensure `data.uid` is a valid string
      if (!data.uid) {
        throw new Error('UID (documentPath) must be a non-empty string.');
      }

      const userRef = db.collection('users').doc(data.uid); // Correctly construct document path
      await userRef.set(data); // Set user data in Firestore document
      return data; // Return created user data
    } catch (error) {
      console.error('Error creating user:', error);
      throw error; // Throw error for handling in AuthService or controller
    }
  }
  static async getUserByUid(uid) {
    try {
      const userRef = db.collection('users').doc(uid);
      const userSnapshot = await userRef.get();
      if (!userSnapshot.exists) {
        return null;
      }
      return userSnapshot.data();
    } catch (error) {
      console.error('Error getting user by UID:', error);
      throw error;
    }
  }

  static async getPatients() {
    const snapshot = await db.collection('users').where('role', '==', 'patient').get();
    const patients = snapshot.docs.map(doc => doc.data());
    return patients;
  }
  static async getDoctors() {
    const snapshot = await db.collection('users').where('role', '==', 'doctor').get();
    const doctors = snapshot.docs.map(doc => doc.data());
    return doctors;
  }
}

module.exports = UserModel;
