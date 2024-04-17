import { useEffect, useState } from 'react';
import Header from '../../Components/Header'
import NavBar from '../../Components/NavBar'
import './MyDevices.css'
import { getUserDevicesByPlan } from '../../Services/PhonePlanDeviceServices';
import { Device } from '../../Types/Types';
import DeviceDetails from '../../Components/DeviceDetails';

export function MyDevices() {

    const[devices, setDevices] = useState([] as Device[])

    useEffect(() => {
        const fetchData = async () => {
            const userId = localStorage.getItem('userId');
            if (userId) {
                try {
                    const userDevices = await getUserDevicesByPlan(userId);
                    setDevices(userDevices);
                } catch (error) {
                    console.error(error);}
            }
        };
        fetchData();
    }, []);

    return (
        <div className='myDevices-container'>
            {<Header/>}
            {<NavBar/>}
                <div className="myDevices-container">
                {/* {devices.map(device => (<DeviceDetails device={device}/>))} */}
                </div>
        </div>
    )
}