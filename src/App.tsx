import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import Dashboard from './Pages/Dashboard';
import PhonePlanPage from "./Pages/PhonePlanPage";
import DevicesPage from "./Pages/DevicesPage";
import MyDevices from './Pages/MyDevices';
import MyPlans from './Pages/MyPlans';

function App() {
    return (
        <Router>
            <Routes>
            {localStorage.getItem('accessToken') && localStorage.getItem('refreshToken') ? (
                <>
                    <Route path="*" element = {<Dashboard/>} />
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/phoneplans" element={<PhonePlanPage/>}/>
                    <Route path="/devices" element={<DevicesPage/>}/>
                    <Route path="/mydevices" element={<MyDevices/>}/>
                    <Route path="/myplans" element={<MyPlans/>}/>

                </>
            ) : (
                <Route path="*" element = {<Home/>} />
            )}
            <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
