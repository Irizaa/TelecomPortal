export interface Device {
    id: string,
    manufacturer: string,
    model: string,
    storage: string,
    color: string
    pictureUrl: string
}

export interface PhonePlan {
    id: string,
    title: string,
    deviceLimit: number,
    price: number,
    phonePlan?: PhonePlan
}

export interface UserPlan {
    id: string,
    planId: string,
    userId: string
    plan: PhonePlan
}

export interface User {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    address: string,
    username: string
}

export interface UserDevice {
    id: string,
    deviceId: string,
    phoneNumber: string,
    userPlanId: string,
    activationDate: string
    userId: string;
    device: Device;
}

export interface Billing {
    id: string;
    userPlanId: string;
    userId: string;
    totalAmount: number;
    billingDate: string;
    dueDate: string;
    isPaid: boolean;
    paymentMethod: string;
    planDetails: PhonePlan;
}

export interface AuthenticationRegistration {
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string,
    address: string
}

export interface AuthenticationLogin {
    username: string,
    password: string
}

export interface PhonePlanWithBill extends PhonePlan {
    billingId: string;
    isPaid: boolean;
}