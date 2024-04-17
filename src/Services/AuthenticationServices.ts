import axios from "axios";
import {AuthenticationLogin, AuthenticationRegistration, PhonePlan} from "../Types/Types";

const http = axios.create({
    baseURL: 'https://localhost:5001/api/authentication',
    headers: {
        'Content-type': 'application/json',
    },
});
export const registerUser = async (registrationDetails: AuthenticationRegistration) => {
    try {
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
        const response = await http.post('login', loginDetails)
        const responseData = response.data;
        localStorage.setItem('accessToken', responseData.accessToken);
        localStorage.setItem('refreshToken', responseData.refreshToken);
        localStorage.setItem('userId', responseData.userId);
        window.location.href = '/dashboard';
    } catch (e) {
        if (e instanceof Error) {
            alert("Invalid username or password")
        }
    }
}