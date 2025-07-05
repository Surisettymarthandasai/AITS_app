// backend/src/app.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const attendanceRoutes = require('./routes/attendance');
const timetableRoutes = require('./routes/timetable');
const connectDB = require('./config/db'); // Renamed for clarity

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Connection - Call the function from db.js
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/timetable', timetableRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});