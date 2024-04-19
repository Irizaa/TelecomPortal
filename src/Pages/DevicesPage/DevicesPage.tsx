import {useEffect, useState} from "react";
import Header from "../../Components/Header";
import {Device, UserPlan} from "../../Types/Types";
import DeviceDetails from "../../Components/DeviceDetails";
import NavBar from "../../Components/NavBar";
import './DevicesPage.css';
import { getUserPlans } from "../../Services/UserPlanServices";
import { getDevices } from "../../Services/DeviceServices";

export function DevicesPage() {
    const[devices, setDevices] = useState([] as Device[])
    const[userPlans, setUserPlans] = useState([] as UserPlan[])

    useEffect(() => {
        getDevices().then(response => {
            setDevices(response.data);
        });
        getUserPlans(localStorage.getItem('userId')).then(response => {
            setUserPlans(response.data);
        });
    }, [setDevices]);

    return (
        <>
            {<Header/>}
            {<NavBar/>}
            <div>
                {devices.map(device => (<DeviceDetails device={device} userPlans={userPlans} />))}
            </div>
        </>
    )
}