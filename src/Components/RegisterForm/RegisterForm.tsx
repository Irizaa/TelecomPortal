import React, { useState } from "react";
import "./RegisterForm.css";
import { AuthenticationRegistration } from "../../Types/Types";
import { registerUser } from "../../Services/AuthenticationServices";

const RegisterForm = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [address, setAddress] = useState("")

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    };
  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    }
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
  }
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setAddress(e.target.value);
  }

  const handleRegistration = () => {

    const registrationDetails: AuthenticationRegistration = {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      email: email,
      address: address
    }
    console.log(registrationDetails)
    registerUser(registrationDetails)
  };

  const handleTogglePassword = () => {
      setShowPassword(!showPassword);
  };

  return (
    <div className="right-container">
      <div id="registration-text">
        <h1>First time here?</h1>
        <h3>Sign up and discover the endless posibilities with Star Telecom!</h3>
      </div>
      <form>
        <div className="form-group">
            <label htmlFor="firstName"></label>
            <input
                className="form-control"
                type="text"
                id="firstName"
                value={firstName}
                onChange={handleFirstNameChange}
                placeholder="First Name"
            />
        </div>
        <div className="form-group">
            <label htmlFor="lastName"></label>
            <input
                className="form-control"
                type="text"
                id="lastName"
                value={lastName}
                onChange={handleLastNameChange}
                placeholder="Last Name"
            />
        </div>
        <div className="form-group">
            <label htmlFor="address"></label>
            <input
                className="form-control"
                type="text"
                id="address"
                value={address}
                onChange={handleAddressChange}
                placeholder="Address"
            />
        </div>
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
          <div className="form-group">
              <label htmlFor="email"></label>
              <input
                  className="form-control"
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Email"
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
                                className="btn btn-outline-light"
                                type="button"
                                onClick={handleTogglePassword}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                </div>
            <div className="button-container">
                    <button className="button-register" onClick={handleRegistration}>Create Your Account</button>
            </div>
        </form>
      </div>
  );
}
export default RegisterForm;