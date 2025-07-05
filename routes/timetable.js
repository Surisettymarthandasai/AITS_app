const express = require('express');
const router = express.Router();
const timetableController = require('../controllers/timetableController');
const authMiddleware = require('../middleware/auth');

// Route to upload timetable image
router.post('/upload', authMiddleware, timetableController.uploadTimetable);

// Route to fetch timetable image
router.get('/fetch/:userId', authMiddleware, timetableController.getTimetable);

module.exports = router;