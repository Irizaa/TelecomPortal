import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import PhonePlanPage from "./Pages/PhonePlanPage";
import DevicesPage from "./Pages/DevicesPage";
import MyDevices from './Pages/MyDevices';
import BillingPage from './Pages/BillingPage';

function App() {
    return (
        <Router>
            <Routes>
            {localStorage.getItem('accessToken') && localStorage.getItem('refreshToken') ? (
                <>
                    <Route path="*" element = {<MyDevices/>} />
                    <Route path="/phoneplans" element={<PhonePlanPage/>}/>
                    <Route path="/devices" element={<DevicesPage/>}/>
                    <Route path="/mydevices" element={<MyDevices/>}/>
                    <Route path = "/billings" element = {<BillingPage/>}/>
                </>
            ) : (
                <>
                <Route path="*" element = {<Home/>} />
                <Route path="/login" element={<LoginPage/>}/>
                </>

            )}
            </Routes>
        </Router>
    );
}

export default App;
