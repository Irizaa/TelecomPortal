
import React, { useState } from "react";
import "./../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./LoginForm.css"
import { AuthenticationLogin } from "../../Types/Types";
import { loginUser } from "../../Services/AuthenticationServices";


//TODO: ADD ERROR MESSAGES WHEN LOGIN FAILS
const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };
    const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const loginDetails: AuthenticationLogin = {
            username: username,
            password: password
        }
        console.log(loginDetails)
        loginUser(loginDetails);
    }

    return (
        <div className="left-container">
            <h1 id = 'login-text'> Login to Your Account</h1>
            <form className = "main-form">
                <div className="form-group">
                    <label htmlFor="username"></label>
                    <input
                        className="form-control"
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="Username"
                    />
                </div>
                <div className = "password-container">
                    <label htmlFor="password"></label>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type={showPassword ? "text" : "password"}
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder="Password"
                        />
                    </div>
                    <div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={handleTogglePassword}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                </div>
                <div className="button-container">
                    <button className="btn btn-primary" onClick={handleLogin}>Sign in</button>
                </div>
            </form>
        </div>
    );
};

    export default LoginForm;