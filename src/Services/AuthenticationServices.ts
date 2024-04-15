import axios from "axios";
import {AuthenticationLogin, AuthenticationRegistration, PhonePlan} from "../Types/Types";

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
        if(axios.isAxiosError(e)) {
            if(e.response) {
                alert(JSON.stringify(e.response.data, null, 2).replace(/[{}]/g, '')); // send error message, remove curly braces from alert.
            }
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
        if (e instanceof Error) {
            alert("Invalid username or password")
        }
    }
}