import axios from "axios";
import { AuthenticationLogin, AuthenticationRegistration } from "../Types/Types";

const http = axios.create({
    baseURL: 'https://localhost:5001',
    headers: {
        'Content-type': 'application/json',
    },
});
export const registerUser = async (registrationDetails: AuthenticationRegistration) => {
    try {
        const response = await http.post('/authentication', registrationDetails)
        const responseData = response.data;
        console.log(responseData);
        loginUser({username: registrationDetails.username, password: registrationDetails.password})
    } catch (e) {
        if(typeof e === "string") {
            e.toUpperCase()
        } else if (e instanceof Error) {
            alert(e.message);
        }
    }
}
export const loginUser = async (loginDetails: AuthenticationLogin) => {
    try {
        console.log(loginDetails)
        const response = await http.post('/authentication/login', loginDetails)
        const responseData = response.data;
        localStorage.setItem('token', responseData.token);
        window.location.href = '/dashboard';
    } catch (e) {
        if(typeof e === "string") {
            e.toUpperCase()
        } else if (e instanceof Error) {
            alert("Invalid username or password")
        }
    }
}