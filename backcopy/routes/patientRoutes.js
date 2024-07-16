const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to get all patients (protected by authentication middleware)
router.get('/patients',patientController.getAllPatients);

module.exports = router;
