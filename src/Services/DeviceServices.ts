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

