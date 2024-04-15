import React, {useEffect, useState} from "react";
import Header from "../../Components/Header";
import {Device} from "../../Types/Types";
import {getDevices} from "../../Services/PhonePlanDeviceServices";
import DeviceDetails from "../../Components/DeviceDetails";

export function DevicesPage() {
    const[devices, setDevices] = useState([] as Device[])

    useEffect(() => {
        getDevices().then(response => {
            setDevices(response.data);
        });
    }, [setDevices]);

    return (
        <div>
            {<Header/>}
            <br></br>
            <br></br>
            <div>
                {devices.map(device => (<DeviceDetails device={device}/>))}
            </div>
        </div>
    )
}