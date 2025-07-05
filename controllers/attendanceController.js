const Attendance = require('../models/Attendance');
const User = require('../models/User');

// Mark Attendance
exports.markAttendance = async (req, res) => {
    const { userId, date, classSlot } = req.body;

    try {
        const attendanceRecord = new Attendance({
            userId,
            date,
            classSlot
        });

        await attendanceRecord.save();
        res.status(201).json({ success: true, recordId: attendanceRecord._id });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error marking attendance' });
    }
};

// Fetch Attendance Records
exports.getAttendanceRecords = async (req, res) => {
    const { userId } = req.params;

    try {
        const records = await Attendance.find({ userId });
        res.status(200).json(records);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching attendance records' });
    }
};

// Calculate Attendance Percentage
exports.calculateAttendancePercentage = async (req, res) => {
    const { userId } = req.body;

    try {
        const totalClasses = await Attendance.countDocuments({ userId });
        const attendedClasses = await Attendance.countDocuments({ userId, attended: true });

        const percentage = totalClasses > 0 ? (attendedClasses / totalClasses) * 100 : 0;

        res.status(200).json({ totalClasses, attended: attendedClasses, percentage });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error calculating attendance percentage' });
    }
};