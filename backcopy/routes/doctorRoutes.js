const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');
const doctorController = require('../controllers/doctorController');
const authMiddleware = require('../middleware/authMiddleware');


// router.get('/patients', (req, res) => {
//   // Your route handling logic here
//   res.send('Patients data');
// });
router.get('/patients', patientController.getAllPatients);

router.get('/doctors', doctorController.getAllDoctors);

module.exports = router;
