import {Device} from "../../Types/Types";

interface DeviceDetailsProp {
    device: Device
}

export function deviceDetails({device}: DeviceDetailsProp) {
    return (
        <div>
            <img src={device.pictureUrl} alt="git"/>
            <h1>{device.model}</h1>
            <h2>{device.manufacturer}</h2>
            <h4>Color: {device.color}</h4>
            <h4>Storage: {device.storage}</h4>
        </div>
    )
}