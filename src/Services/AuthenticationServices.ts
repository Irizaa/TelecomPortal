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
        // Handle the response
    } catch (error) {
        // Handle the error
    }
}
export const loginUser = async (loginDetails: AuthenticationLogin) => {
    try {
        const response = await http.post('/authentication/login', loginDetails)
        const responseData = response.data;
        localStorage.setItem('token', responseData.token);
    } catch (error) {
        console.log(error); // Log the error message
    }
}