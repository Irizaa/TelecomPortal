// all of these can be adjusted once the backend DTOs are finalized

interface Device {
    id: string,
    manufacturer: string,
    model: string,
    storage: string,
    color: string
    pictureUrl: string
}

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

export type {Device, PhonePlan, UserPlan, User, UserDevice, AuthenticationRegistration, AuthenticationLogin}

