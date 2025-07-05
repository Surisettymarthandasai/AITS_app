import React, { useEffect, useState } from 'react';
import AttendanceSection from './AttendanceSection';
import TimetableSettings from './TimetableSettings';
import AttendanceChartModal from './AttendanceChartModal';
import { fetchTimetable, fetchAttendancePercentage } from '../utils/api';

const Dashboard = () => {
    const [timetableImage, setTimetableImage] = useState(null);
    const [attendancePercentage, setAttendancePercentage] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        loadTimetable();
        loadAttendancePercentage();
    }, []);

    const loadTimetable = async () => {
        const response = await fetchTimetable();
        if (response.imageUrl) {
            setTimetableImage(response.imageUrl);
        }
    };

    const loadAttendancePercentage = async () => {
        const response = await fetchAttendancePercentage();
        setAttendancePercentage(response.percentage);
    };

    const handleViewAttendancePercentage = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="dashboard">
            <header>
                <h1>Welcome to ClassTrackr</h1>
                <button onClick={handleViewAttendancePercentage}>View Attendance Percentage</button>
            </header>
            <TimetableSettings setTimetableImage={setTimetableImage} />
            <AttendanceSection timetableImage={timetableImage} />
            {showModal && (
                <AttendanceChartModal 
                    percentage={attendancePercentage} 
                    onClose={handleCloseModal} 
                />
            )}
        </div>
    );
};

export default Dashboard;