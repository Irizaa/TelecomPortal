import axios from "axios";
import { PhonePlan } from "../Types/Types";

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
        alert('Plan successfully deleted!');
        window.location.reload();
    } catch (e) {
        if(axios.isAxiosError(e)) {
            if(e.response) {
                alert(JSON.stringify(e.response.data, null, 2).replace(/[{}]/g, ''));
            }
        }
    }
}

export {getPhonePlans, getPhonePlanById, addUserPlan, deleteUserPlan}