// all of these can be adjusted once the backend DTOs are finalized

interface Device {
    id: string,
    manufacturer: string,
    model: string,
    storage: string,
    color: string
}

interface PhonePlan {
    id: string,
    title: string,
    deviceLimit: number,
    price: number
}

interface UserPlan {
    id: string,
    planId: string,
    userId: string
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
    ActivationDate: string
}

export type {Device, PhonePlan, UserPlan, User, UserDevice}

