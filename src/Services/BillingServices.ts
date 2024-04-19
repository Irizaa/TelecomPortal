import axios from "axios";
import { Billing, PhonePlanWithBill } from "../Types/Types";

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
export const payBill = async (userId: string, billingId: string) => {
    try {
        await http.put(`/user/${userId}/Billing/billpay`, { 'id': billingId, 'isPaid': true, 'paymentMethod': 'Credit Card'});
        alert('Bill successfully paid!');
        window.location.reload();
    } catch (e) {
        if (axios.isAxiosError(e)) {
            if (e.response) {
                alert(JSON.stringify(e.response.data, null, 2).replace(/[{}]/g, ''));
            }
        }
    
    }
}

export const calculateMonthlyBill = (bills: Billing[]) => {
    // Map [Date : Bills for that date]. Allows us to group together bills per month.
    const monthlyBill: Record<string, { totalAmount: number, plans: PhonePlanWithBill[] }> = {};

    bills.forEach(bill => {
        const month = new Date(bill.dueDate).toLocaleDateString()

        if (!monthlyBill[month]) {
            monthlyBill[month] = { totalAmount: 0, plans: [] };
        }
        if (!bill.isPaid) {
            monthlyBill[month].totalAmount += bill.totalAmount;
        }
        const phonePlanWithBill: PhonePlanWithBill = {
            ...bill.planDetails,
            billingId: bill.id,
            isPaid: bill.isPaid
        }
        monthlyBill[month].plans.push(phonePlanWithBill);
    });

    return monthlyBill;
};