import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import Dashboard from './Pages/Dashboard';
import PhonePlanPage from "./Pages/PhonePlanPage";
import DevicesPage from "./Pages/DevicesPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<Home/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/phoneplans" element={<PhonePlanPage/>}/>
                <Route path="/devices" element={<DevicesPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
