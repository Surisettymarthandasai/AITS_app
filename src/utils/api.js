import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Adjust the URL as needed

// User Authentication
export const signup = async (userData) => {
    const response = await axios.post(`${API_URL}/auth/signup`, userData);
    return response.data;
};

export const login = async (userData) => {
    const response = await axios.post(`${API_URL}/auth/login`, userData);
    return response.data;
};

// Timetable Management
export const uploadTimetable = async (timetableData) => {
    const response = await axios.post(`${API_URL}/timetable/upload`, timetableData);
    return response.data;
};

export const fetchTimetable = async (userId) => {
    const response = await axios.get(`${API_URL}/timetable/${userId}`);
    return response.data;
};

// Attendance Management
export const markAttendance = async (attendanceData) => {
    const response = await axios.post(`${API_URL}/attendance/mark`, attendanceData);
    return response.data;
};

export const calculateAttendancePercentage = async (userId) => {
    const response = await axios.get(`${API_URL}/attendance/percentage/${userId}`);
    return response.data;
};