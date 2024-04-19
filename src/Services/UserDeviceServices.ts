import axios from "axios";
import { UserDevice } from "../Types/Types";

const http = axios.create({
    baseURL: 'https://localhost:5001',
    headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    },
});

export const getUserDevicesByPlan = async (userId: string, userPlanId: string) => {
    return await http.get<Array<UserDevice>>(`/user/${userId}/UserDevice/plan/${userPlanId}`);
}

export const getAllUserDevices = async (userId: string) => {
    return await http.get<Array<UserDevice>>(`/user/${userId}/UserDevice`);
}

export const addUserDevice = async (userId: string, deviceId: string, userPlanId: string) => {
    try {
        await http.post(`/user/${userId}/UserDevice/add/${userPlanId}`, { deviceId: deviceId, userId: userId, userPlanId: userPlanId})
        alert('Phone successfully added!')
    } catch (e) {
        if(axios.isAxiosError(e)) {
            if(e.response) {
                alert(JSON.stringify(e.response.data, null, 2).replace(/[{}]/g, ''));
            }
        }
    }
}

export const deleteUserDevice = async (userId: string, deviceId: string) => {
    try {
        await http.delete(`/user/${userId}/UserDevice/delete/${deviceId}`);
        alert('Device successfully deleted!')
        
    } catch (e) {
        if(axios.isAxiosError(e)) {
            if(e.response) {
                alert(JSON.stringify(e.response.data, null, 2).replace(/[{}]/g, ''));
            }
        }
    }
}

export const swapPhoneNumbers = async (userId: string, userDevices: UserDevice[]) => {
    try {
        await http.put(`/user/${userId}/UserDevice/swapphonenumbers`, userDevices);
        alert('Phone numbers successfully changed!')
    } catch (e) {
        if(axios.isAxiosError(e)) {
            if(e.response) {
                alert(JSON.stringify(e.response.data, null, 2).replace(/[{}]/g, ''));
            }
        }
    }
}
