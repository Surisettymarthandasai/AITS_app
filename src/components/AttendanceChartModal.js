import React from 'react';
import Modal from 'react-modal';
import { Bar } from 'react-chartjs-2';

const AttendanceChartModal = ({ isOpen, onRequestClose, attendanceData }) => {
    const data = {
        labels: ['Attended', 'Missed'],
        datasets: [
            {
                label: 'Attendance Percentage',
                data: [attendanceData.attended, attendanceData.totalClasses - attendanceData.attended],
                backgroundColor: ['#4caf50', '#f44336'],
            },
        ],
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="attendance-chart-modal">
            <h2>Attendance Percentage</h2>
            <Bar data={data} options={{ responsive: true }} />
            <button onClick={onRequestClose}>Close</button>
        </Modal>
    );
};

export default AttendanceChartModal;