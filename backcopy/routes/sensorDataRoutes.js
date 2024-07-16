const express = require('express');
const router = express.Router();
const sensorDataController = require('../controllers/sensorDataController');
router.post('/temperature-data', sensorDataController.saveTemperatureData);
router.get('/temperature-data/:patientId', sensorDataController.getTemperatureData);
// router.get('/temperature-data', sensorDataController.getTemperatureData);

module.exports = router;
