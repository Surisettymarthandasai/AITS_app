# ClassTrackr - Student Attendance Management System

## Overview
ClassTrackr is a web-based attendance management system designed for a small group of students. It provides user authentication, timetable management, daily attendance marking, and attendance percentage calculation. The application features a futuristic, animated user interface that is fully responsive across mobile, tablet, and desktop devices.

## Features
- **User Authentication**: Secure login and signup functionality with JWT token generation.
- **Timetable Management**: Admins can upload and manage timetable images.
- **Attendance Marking**: Students can mark their attendance for each class slot.
- **Attendance Percentage Calculation**: Users can view their attendance percentage in a visually appealing format.

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript (React)
- **Backend**: Node.js, Express
- **Database**: MongoDB

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/classtrackr.git
   ```
2. Navigate to the backend directory and install dependencies:
   ```
   cd classtrackr/backend
   npm install
   ```
3. Set up your MongoDB database and update the connection string in `src/config/db.js`.
4. Start the backend server:
   ```
   npm start
   ```
5. Navigate to the frontend directory and install dependencies:
   ```
   cd classtrackr/frontend
   npm install
   ```
6. Start the frontend application:
   ```
   npm start
   ```

## Usage
- Access the application in your web browser at `http://localhost:3000`.
- Use the login page to authenticate or sign up for a new account.
- Admins can upload the timetable in the dashboard.
- Students can mark their attendance and view their attendance percentage.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.