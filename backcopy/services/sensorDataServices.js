const { db } = require('../config/firebaseConfig');

// Function to save temperature data to Firestore
const saveTemperatureData = async (patient_id, temperature, timestamp) => {
  try {
    const docRef = await db.collection('temperatureData').add({
      patient_id,
      temperature,
      timestamp,
    });
    console.log('Document written with ID: ', docRef.id);
    return docRef.id; // Return the ID of the newly added document
  } catch (error) {
    console.error('Error adding sensor data:', error);
    throw new Error('Failed to add sensor data');
  }
};

const getTemperatureData = async () => {
  try {
      const snapshot = await db.collection('temperatureData').get();
      const temperatureData = [];
      snapshot.forEach(doc => {
          temperatureData.push({
              id: doc.id,
              ...doc.data()
          });
      });
      return temperatureData;
  } catch (error) {
      console.error('Error fetching temperature data:', error);
      throw new Error('Failed to fetch temperature data');
  }
};

module.exports = {
  saveTemperatureData,
  getTemperatureData,
};
