const Timetable = require('../models/Timetable');

// Upload timetable image
exports.uploadTimetable = async (req, res) => {
    try {
        const { imageUrl, userId } = req.body;

        const newTimetable = new Timetable({
            imageUrl,
            userId
        });

        await newTimetable.save();
        res.status(201).json({ message: 'Timetable uploaded successfully', imageUrl });
    } catch (error) {
        res.status(500).json({ message: 'Error uploading timetable', error: error.message });
    }
};

// Fetch timetable image
exports.getTimetable = async (req, res) => {
    try {
        const { userId } = req.params;

        const timetable = await Timetable.findOne({ userId });
        if (!timetable) {
            return res.status(404).json({ message: 'Timetable not found' });
        }

        res.status(200).json({ imageUrl: timetable.imageUrl });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching timetable', error: error.message });
    }
};