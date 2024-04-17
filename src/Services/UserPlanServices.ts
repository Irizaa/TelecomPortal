import axios from "axios";
import {UserPlan} from "../Types/Types";

const http = axios.create({
    baseURL: 'https://localhost:5001',
    headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    },
});

export const getUserPlans = async (userId: string | null) => {
    console.log(userId)
    return await http.get<Array<UserPlan>>(`/user/${userId}/UserPlan`);
}