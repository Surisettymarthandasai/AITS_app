const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');
const authMiddleware = require('../middleware/auth');

// Route to mark attendance
router.post('/mark', authMiddleware, attendanceController.markAttendance);

// Route to fetch attendance percentage

router.get('/percentage', authMiddleware, attendanceController.calculateAttendancePercentage);


// Route to fetch attendance records
router.get('/records', authMiddleware, attendanceController.getAttendanceRecords);

module.exports = router;