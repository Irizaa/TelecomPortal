import {Device, UserPlan} from "../../Types/Types";
import './DeviceDetails.css'
import DeviceModal from "../DeviceModal";


interface ModalProps {
  device: Device;
  userPlans: UserPlan[];
}


const DeviceDetails: React.FC<ModalProps> = ({device, userPlans}) => {

    return (
        <div className = 'device-details-container'>
          <ul>
              <li className = 'device-box'>
                <img className = 'device-image' alt = 'album' src = {device.pictureUrl}></img>
                <div className = 'device-info'>
                  <p className = 'device-secondary-text'>{device.manufacturer}</p>
                  <p className = 'device-primary-text'>{device.model}</p>
                  <p className = 'device-secondary-text'>{`Color:  ${device.color}`}</p>
                  <p className = 'device-secondary-text'>{`Storage:  ${device.storage}`}</p>
                  <DeviceModal device = {device} userPlans={userPlans}>
                    <p></p>
                  </DeviceModal>
                </div>
              </li>
          </ul>
        </div>
    )
}
export default DeviceDetails;