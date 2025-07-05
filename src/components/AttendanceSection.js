import React, { useState, useEffect } from 'react';
import { fetchAttendancePercentage, markAttendance } from '../utils/api';

const AttendanceSection = ({ userId }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [timetableImage, setTimetableImage] = useState('');
    const [attendanceSlots, setAttendanceSlots] = useState([]);
    const [attendancePercentage, setAttendancePercentage] = useState(null);

    useEffect(() => {
        // Fetch timetable image based on selected date
        const fetchTimetable = async () => {
            // Logic to fetch timetable image from the backend
            // setTimetableImage(response.imageUrl);
            // setAttendanceSlots(response.slots);
        };
        fetchTimetable();
    }, [selectedDate]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleMarkAttendance = async (classSlot) => {
        const response = await markAttendance(userId, selectedDate.toISOString().split('T')[0], classSlot);
        if (response.success) {
            // Update attendance slots or show success message
        }
    };

    const handleViewAttendancePercentage = async () => {
        const response = await fetchAttendancePercentage(userId);
        setAttendancePercentage(response.percentage);
    };

    return (
        <div className="attendance-section">
            <h2>Attendance Section</h2>
            <button onClick={() => handleDateChange(new Date())}>Select Date</button>
            {timetableImage && <img src={timetableImage} alt="Timetable" />}
            <div className="attendance-slots">
                {attendanceSlots.map((slot, index) => (
                    <div key={index} className="attendance-slot">
                        <span>{slot.className} - {slot.time}</span>
                        <button onClick={() => handleMarkAttendance(index)}>Mark Attendance</button>
                    </div>
                ))}
            </div>
            <button onClick={handleViewAttendancePercentage}>View Attendance Percentage</button>
            {attendancePercentage !== null && (
                <div className="attendance-percentage">
                    <h3>Attendance Percentage: {attendancePercentage}%</h3>
                </div>
            )}
        </div>
    );
};

export default AttendanceSection;