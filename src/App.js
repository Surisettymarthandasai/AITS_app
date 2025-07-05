import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Dashboard from './components/Dashboard';
import TimetableSettings from './components/TimetableSettings';
import AttendanceSection from './components/AttendanceSection';
import AttendanceChartModal from './components/AttendanceChartModal';
import './styles/main.css';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/timetable-settings" component={TimetableSettings} />
                <Route path="/attendance" component={AttendanceSection} />
                <Route path="/attendance-chart" component={AttendanceChartModal} />
            </Switch>
        </Router>
    );
}

export default App;