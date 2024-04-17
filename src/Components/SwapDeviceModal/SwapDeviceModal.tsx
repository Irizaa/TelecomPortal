import { ReactNode, useEffect, useState } from 'react';
import { Device, UserDevice, UserPlan } from '../../Types/Types';
import './SwapDeviceModal.css';
import { getAllUserDevices, swapPhoneNumbers } from '../../Services/PhonePlanDeviceServices';

// Take in a device, and a list of user plans
// with the user-plans, get all user-devices
// display all phone-numbers associated with the user-devices
// allow the user to select a phone-number to swap with the current device
// swap the selected phone-number with the current device
// display a success message
// display an error message if the swap fails
// close the modal

interface ModalProps {
    children: ReactNode;
    device: UserDevice;
    userPlans: UserPlan[];
}

const SwapDeviceModal: React.FC<ModalProps> = ({device, userPlans}) => {

    const [userDevices, setUserDevices] = useState([] as UserDevice[]);
    useEffect(() => {
      getAllUserDevices(localStorage.getItem('userId') as string).then(response => {
        setUserDevices(response.data); // Extract the data from the Axios response
      })
    }, [userPlans])    
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };
  
    const handleClick = async(devices: UserDevice[]) => {
        await swapPhoneNumbers(localStorage.getItem('userId') as string, devices);
        // await addUserDevice(localStorage.getItem('userId') as string, device.id, userPlanId);
        setIsOpen(false);
    }

    return (
        <>
          <button type="button" className="btn btn-danger table-button" onClick={openModal}>
            Change Phone Number
          </button>
          {isOpen && (
            <div className="modal fade show" tabIndex={-1} style={{ display: 'block' }}>
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Choose your new phone number</h5>
                  </div>
                  <div>
                  {userDevices?.map((currentDevice, index) => (
                    <div className="modal-body" key={index} onClick={() => handleClick([currentDevice, device])}>
                        {currentDevice.id === device.id ? `Current Phone Number: ${currentDevice.phoneNumber}` : currentDevice.phoneNumber}
                    </div>
                ))}
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={closeModal}>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {isOpen && <div className="modal-backdrop fade show"></div>}
        </>
      );
}
export default SwapDeviceModal;