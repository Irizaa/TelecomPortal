import { ReactNode, useEffect, useState } from 'react';
import { UserDevice, UserPlan } from '../../Types/Types';
import './SwapDeviceModal.css';
import { getAllUserDevices, swapPhoneNumbers } from '../../Services/UserDeviceServices';


interface ModalProps {
    children: ReactNode;
    device: UserDevice;
    userPlans: UserPlan[];
}

const SwapDeviceModal: React.FC<ModalProps> = ({device, userPlans}) => {

    const [userDevices, setUserDevices] = useState([] as UserDevice[]);
    
    useEffect(() => {
      getAllUserDevices(localStorage.getItem('userId') as string).then(response => {
        setUserDevices(response.data);
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
        setIsOpen(false);
        window.location.reload();
    }

    return (
        <>
          <button type="button" className="btn btn-danger table-button" onClick={openModal}>
            Change Phone Number
          </button>
          {isOpen && (
            <div className="modal fade show" style={{ display: 'block' }}>
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Choose your new phone number</h5>
                  </div>
                  <div>
                  {userDevices?.map((currentDevice, index) => (
                    <div className="modal-body" key={index} onClick={() => handleClick([currentDevice, device])}>
                        {currentDevice.id === device.id ? `${currentDevice.phoneNumber} - Current` : currentDevice.phoneNumber}
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