import axios from "axios";
import { Billing, PhonePlan } from "../Types/Types";

const http = axios.create({
    baseURL: 'https://localhost:5001',
    headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    },
});

export const getUserBills = async (userId: string) => {
    return await http.get<Array<Billing>>(`/user/${userId}/Billing`);
}
export const calculateMonthlyBill = (bills: Billing[]) => {
    const balanceByMonth: Record<string, { totalAmount: number, plans: PhonePlan[] }> = {};

    bills.forEach(bill => {
        const month = new Date(bill.dueDate).toLocaleDateString()

        if (!balanceByMonth[month]) {
            balanceByMonth[month] = { totalAmount: 0, plans: [] };
        }
        if (!bill.isPaid) {
            balanceByMonth[month].totalAmount += bill.totalAmount;
            balanceByMonth[month].plans.push(bill.planDetails);
        }
    });

    return balanceByMonth;
};