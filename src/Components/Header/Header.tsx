import logo from '../../Assets/star-telecom.png';
import './Header.css'
const Header = () => {
return (
    <>
        <div id = 'header'>
            <a href="mydevices">
                <img src={logo} alt="Logo" height={35} />
            </a>
        </div>
    </>
);
}
export default Header;