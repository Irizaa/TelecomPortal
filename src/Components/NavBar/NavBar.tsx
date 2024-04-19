import { useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const navigate = useNavigate()

    const logOut = () => {
        localStorage.clear()
        sessionStorage.clear()
    }
    // set className of a link to be 'nav-link active' depending on the current path
    return (
        <ul className="nav nav-pills nav-fill">

            <li className="nav-item">
                <span className={`nav-link ${window.location.pathname === '/mydevices' ? 'active' : ''}`} 
                onClick={() => navigate('/mydevices')}>My Devices</span>
            </li>
            <li className="nav-item">
                <span className={`nav-link ${window.location.pathname === '/phoneplans' ? 'active' : ''}`} 
                onClick={() => navigate('/phoneplans')}>Browse Plans</span>
            </li>
            <li className="nav-item">
                <span className={`nav-link ${window.location.pathname === '/devices' ? 'active' : ''}`} 
                onClick={() => navigate('/devices')}>Browse Devices</span>
            </li>
            <li className="nav-item">
                <span className={`nav-link ${window.location.pathname === '/billings' ? 'active' : ''}`} 
                onClick={() => navigate('/billings')}>Billings</span>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/" onClick={logOut}>Log Out</a>
            </li>
            
        </ul>
    )
}
export default NavBar;