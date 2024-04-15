import axios from "axios";
import {Device, PhonePlan} from "../Types/Types";

const http = axios.create({
    baseURL: 'https://localhost:5001',
    headers: {
        'Content-type': 'application/json',
    },
});

const getPhonePlans = async () => {
    return await http.get<Array<PhonePlan>>('/phoneplan');
}

const getPhonePlanById = async(id: string) => {
    return await http.get<PhonePlan>(`/phoneplan/${id}`)
}

const getDevices = async () => {
    return await http.get<Array<Device>>('/device');
}

const getDeviceById = async(id: string) => {
    return await http.get<Device>(`/device/${id}`)
}

export {getPhonePlans, getPhonePlanById, getDevices}