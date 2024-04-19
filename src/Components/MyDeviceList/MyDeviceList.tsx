import { useEffect, useState } from "react";
import { UserDevice, UserPlan } from "../../Types/Types";
import { useNavigate } from 'react-router-dom'
import { deleteUserDevice, getUserDevicesByPlan } from "../../Services/UserDeviceServices";
import SwapDeviceModal from "../SwapDeviceModal";
import "./../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './MyDeviceList.css';

interface ModalProps {
  userPlan: UserPlan;
}

const MyDeviceList:React.FC<ModalProps> = ({userPlan}) => {
  const navigate = useNavigate()


  const removeDevice = async(deviceId: string) => {
    await deleteUserDevice(localStorage.getItem('userId') as string, deviceId);
    setDevices(devices.filter(device => device.id !== deviceId));
  }

  const [devices, setDevices] = useState([] as UserDevice[]);

  useEffect(() => {
    getUserDevicesByPlan(localStorage.getItem('userId') as string, userPlan.id).then(response => {
      setDevices(response.data);
    });
  }, [userPlan])

  return (
    <>
    <h1 id = 'mydevice-text'>My Devices</h1>
    {devices.length === 0 ? (
      <>
        <p>Nothing found here...</p>
        <button className="btn btn-primary" onClick={() => navigate('/devices')}>Browse Devices</button>
      </>
    ) : (
      <table className="table" id = 'mydevice-table'>
        <thead>
          <tr className="table-dark">
          <th scope="col">Device Name</th>
          <th scope="col">Device Manufacturer</th>
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
      
    )}
    </>
  );
}

export default MyDeviceList;