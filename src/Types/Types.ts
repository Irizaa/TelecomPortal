// all of these can be adjusted once the backend DTOs are finalized

interface Device {
    id: string,
    manufacturer: string,
    model: string,
    storage: string,
    color: string
    pictureUrl: string
}
// interface DeviceAndPlan extends Device {
//     planId: string;
//     planName: string;
// }

interface PhonePlan {
    id: string,
    title: string,
    deviceLimit: number,
    price: number,
    phonePlan?: PhonePlan
}

interface UserPlan {
    id: string,
    planId: string,
    userId: string
    plan: PhonePlan
    // userDevices: UserDevice[]
}

``

// Set to User for now can change the name if JWT is implemented
interface User {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    address: string,
    username: string
    // userPlans: UserPlan[]
}

interface UserDevice {
    id: string,
    deviceId: string,
    phoneNumber: string,
    userPlanId: string,
    activationDate: string
    userId: string;
    device: Device;
}

interface Billing {
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


interface AuthenticationRegistration {
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string,
    address: string
}

interface AuthenticationLogin {
    username: string,
    password: string
}

export type {Device, PhonePlan, UserPlan, User, UserDevice, AuthenticationRegistration, AuthenticationLogin, Billing}

