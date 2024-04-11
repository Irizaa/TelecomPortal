
import React, { useState } from "react";
import "./../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./LoginForm.css"

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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // form submission logic here
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="left-container">
            <h1 id = 'login-text'> Login to Your Account</h1>
            <form className = "main-form"onSubmit={handleSubmit}>
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
                    <button className="btn btn-primary" type="submit">Sign in</button>
                </div>
            </form>

        </div>
    );
};

    export default LoginForm;