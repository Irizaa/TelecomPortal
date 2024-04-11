import React from "react";
import './LoginPage.css';
import Header from "../../Components/Header";
import LoginForm from "../../Components/LoginForm";
import RegisterForm from "../../Components/RegisterForm";


const LoginPage = () => {
  return (
    <div className="app">
        {<Header/>}
        <div className = "login-page">
          {<LoginForm/>}
          {<RegisterForm/>}
        </div>
    </div>
  )
}
export default LoginPage;