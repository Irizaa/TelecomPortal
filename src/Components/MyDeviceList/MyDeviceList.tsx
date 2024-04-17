import { useEffect, useState } from "react";
import { UserDevice, UserPlan } from "../../Types/Types";
import { deleteUserDevice, getUserDevicesByPlan } from "../../Services/PhonePlanDeviceServices";
import "./../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './MyDeviceList.css';
import DeviceModal from "../DeviceModal";
import SwapDeviceModal from "../SwapDeviceModal";

interface ModalProps {
    userPlan: UserPlan;
}

const MyDeviceList:React.FC<ModalProps> = ({userPlan}) => {

    const removeDevice = async(deviceId: string) => {
        await deleteUserDevice(localStorage.getItem('userId') as string, deviceId);
    }

    const [devices, setDevices] = useState([] as UserDevice[]);

    useEffect(() => {
        getUserDevicesByPlan(localStorage.getItem('userId') as string, userPlan.id).then(response => {
            setDevices(response.data);
        });
    }, [userPlan])

    return (
        <table className="table">
        <thead>
          <tr className="table-dark">
            <th scope="col">Device Name</th>
            <th scope="col">Device Model</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Activation Date</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {devices.map((device, index) => (
            <tr key={index}>
              <td>{device.device.model}</td>
              <td>{device.device.manufacturer}</td>
              <td>{device.phoneNumber}</td>
              <td>{new Date(device.activationDate).toLocaleDateString()}</td>
              <td><button className="btn btn-danger table-button" onClick={() => removeDevice(device.id)}>Remove Phone</button></td>
              <td>
                <SwapDeviceModal device={device} userPlans={[userPlan]}>
                <p></p>
                </SwapDeviceModal>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}
export default MyDeviceList;