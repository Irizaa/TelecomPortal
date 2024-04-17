import {Device, PhonePlan, UserPlan} from "../../Types/Types";
import './DeviceDetails.css'
import DeviceModal from "../DeviceModal";


interface ModalProps {
  device: Device;
  userPlans: UserPlan[];
}


const DeviceDetails: React.FC<ModalProps> = ({device, userPlans}) => {
  const handleSave = () => {
    console.log("Save button clicked!");
    // Add your save logic here
  };
  console.log(userPlans)
  
    return (
        <div className = 'device-details-container'>
          <ul>
              <li className = 'device-box'>
                <img className = 'device-image' alt = 'album' src = {device.pictureUrl}></img>
                <div className = 'device-info'>
                  <p id = 'artist-name'>{device.manufacturer}</p>
                  <p id = 'song-name'>{device.model}</p>
                  <p id = 'artist-name'>{`Color:  ${device.color}`}</p>
                  <p id = 'artist-name'>{`Storage:  ${device.storage}`}</p>
                  <DeviceModal title="Add this device to one of your plans:" onSave={handleSave} device = {device} userPlans={userPlans}>
                    <p></p>
                  </DeviceModal>
                </div>
              </li>
          </ul>
        </div>
    )
}
export default DeviceDetails;