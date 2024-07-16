const { db } = require('../config/firebaseConfig');

// Function to save temperature data to Firestore
const addSensorData = async (patient_id, temperature, timestamp) => {
  try {
      await db.collection('temperatureData').add({
          patient_id: patient_id,
          temperature: temperature,
          timestamp: timestamp
      });
      console.log('Data saved successfully');
  } catch (error) {
      console.error('Error adding sensor data:', error);
      throw new Error('Failed to add sensor data');
  }
};

// Function to fetch temperature data for a specific patient
const getTemperatureData = async (patient_id) => {
  try {
    // Reference to the 'temperatureData' collection
    const temperatureDataRef = db.collection('temperatureData');

    // Query for documents where 'patient_id' is equal to provided id
    const snapshot = await temperatureDataRef.where('patient_id', '==', patient_id).get();

    if (snapshot.empty) {
      console.log('No matching documents.');
      return [];
    }

    // Array to hold temperature data documents
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
  addSensorData,
  getTemperatureData
};
