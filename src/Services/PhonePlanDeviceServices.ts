import axios from "axios";
import {Device, PhonePlan, UserDevice, UserPlan} from "../Types/Types";

const http = axios.create({
    baseURL: 'https://localhost:5001',
    headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
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
// const getUserDevicesByPlan = async (userId: string) => {
//     const userPlans = await http.get<Array<UserPlan>>(`/user/${userId}/UserPlan`); // Get all user plans
//     const userDevices: Device[] = [];
//     for (const userPlan of userPlans.data) {
//         const devicesResponse = await http.get<Array<UserDevice>>(`/user/${userId}/UserDevice/plan/${userPlan.id}`); // Get all devices for the user plan

//         for (const device of devicesResponse.data) {
//             const deviceDetails = await http.get<Device>(`/device/${device.deviceId}`); // Get the device details
//             userDevices.push(deviceDetails.data);
//         }
//     }
//     return userDevices;
// }
const getUserDevicesByPlan = async (userId: string, userPlanId: string) => {
    return await http.get<Array<UserDevice>>(`/user/${userId}/UserDevice/plan/${userPlanId}`);
}
// export const getAllUserDevices = async (userId: string, userPlans: UserPlan[]) => {
//     const userDevices: UserDevice[] = [];
//     for (const userPlan of userPlans) {
//         const devicesResponse = await http.get<Array<UserDevice>>(`/user/${userId}/UserDevice/plan/${userPlan.id}`);

//         for (const device of devicesResponse.data) {
//             userDevices.push(device);
//         }
//     }
//     return userDevices;
// }
export const getAllUserDevices = async (userId: string) => {
    return await http.get<Array<UserDevice>>(`/user/${userId}/UserDevice`);
}


const addUserDevice = async (userId: string, deviceId: string, userPlanId: string) => {
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
const addUserPlan = async (userId: string, phonePlanId: string) => {
    try {
        await http.post(`/user/${userId}/UserPlan/add/${phonePlanId}`);
        alert('Plan successfully added!')
    } catch (e) {
        if(axios.isAxiosError(e)) {
            if(e.response) {
                alert(JSON.stringify(e.response.data, null, 2).replace(/[{}]/g, ''));
            }
        }
    }
}
const deleteUserPlan = async (userId: string, phonePlanId: string) => {
    try {
        await http.delete(`/user/${userId}/UserPlan/delete/${phonePlanId}`);
        alert('Plan successfully deleted!')
    } catch (e) {
        if(axios.isAxiosError(e)) {
            if(e.response) {
                alert(JSON.stringify(e.response.data, null, 2).replace(/[{}]/g, ''));
            }
        }
    }
}
const deleteUserDevice = async (userId: string, deviceId: string) => {
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


export {getPhonePlans, getPhonePlanById, getDevices, getUserDevicesByPlan, getDeviceById, addUserDevice, addUserPlan, deleteUserPlan, deleteUserDevice}