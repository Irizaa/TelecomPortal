import axios from "axios";
import { Device } from "../Types/Types";

const http = axios.create({
    baseURL: 'https://localhost:5001',
    headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    },
});

export const getDevices = async () => {
    return await http.get<Array<Device>>('/device');
}

export const getDeviceById = async(id: string) => {
    return await http.get<Device>(`/device/${id}`)
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

