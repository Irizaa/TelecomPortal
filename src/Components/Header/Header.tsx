import React from "react";
import logo from '../../Assets/star-telecom.png';

const Header = () => {
return (
    <>
        <div style={{ backgroundColor: "#181818", height: "80px", width: "100%", position: "relative", top: 0, left: 0, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src={logo} alt="Logo" height={35} />
        </div>
        {/* Rest of the component */}
    </>
);
}
export default Header;