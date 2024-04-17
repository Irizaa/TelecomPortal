import { useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const navigate = useNavigate()

    const logOut = () => {
        localStorage.clear()
        sessionStorage.clear()
    }

    return (
        <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
                <a className="nav-link" href="/mydevices">My Devices</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/phoneplans">Browse Plans</a>
            </li>
            <li className="nav-item">
                <a className="nav-link"  href="/devices">Browse Devices</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/billings">Billings</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/" onClick={logOut}>Log Out</a>
            </li>
        </ul>
    )
}
export default NavBar;