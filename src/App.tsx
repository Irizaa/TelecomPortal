import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home/>} />
        <Route path ="/login" element={<LoginPage/>} />
        <Route path = "/dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
