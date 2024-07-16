const express = require('express');
const bodyParser = require('body-parser');
const admin = require('./config/firebaseConfig'); // Import custom Firebase configuration
const app = express();
// const apiRoutes = require('./routes/api');
const appointmentRoutes = require('./routes/appointmentRoutes');
// const fitbitRoutes = require('./routes/fitbitRoutes');


const port = process.env.PORT || 8000;
var cors = require('cors')

app.use(cors())
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Routes
const authRoutes = require('./routes/authRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const patientRoutes = require('./routes/patientRoutes');
const sensorDataRoutes = require('./routes/sensorDataRoutes');

app.use('/auth', authRoutes);
app.use('/doctor', doctorRoutes);
app.use('/patient', patientRoutes);
app.use('/api', sensorDataRoutes);
// app.use('/api',apiRoutes);
// app.use('/api', sensorDataRoutes)
app.use('/api/appointments', appointmentRoutes);


// app.use('/api', fitbitRoutes);

// Error handling middleware
const { handleError } = require('./utils/errorHandler');
app.use(handleError);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
