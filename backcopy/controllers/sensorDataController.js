const sensorDataModel = require('../models/sensorDataModel');
const sensorDataService = require('../services/sensorDataServices');
const { db } = require('../config/firebaseConfig');
// Controller function to save temperature data
exports.saveTemperatureData = async (req, res) => {
  try {
    const { patient_id, temperature } = req.body;
    const timestamp = new Date().toISOString();

    await sensorDataModel.addSensorData(patient_id, temperature, timestamp);

    res.status(200).send('Data saved successfully');
  } catch (error) {
    console.error('Error saving temperature data:', error);
    res.status(500).send('Error saving data');
  }
};

// Controller function to fetch temperature data for a specific patient
exports.getTemperatureData = async (req, res) => {
    try {
        const temperatureData = await sensorDataService.getTemperatureData();
        res.status(200).json(temperatureData);
    } catch (error) {
        console.error('Error fetching temperature data:', error);
        res.status(500).send('Error fetching temperature data');
    }
};
