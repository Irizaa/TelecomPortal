import React, { ReactNode, useState } from 'react';
import { Device, UserPlan } from '../../Types/Types';
import { addUserDevice } from '../../Services/UserDeviceServices';

import './DeviceModal.css';
interface ModalProps {
    children: ReactNode;
    device: Device;
    userPlans: UserPlan[];
  }

const Modal: React.FC<ModalProps> = ({ device, userPlans }) => {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleClick = async(userPlanId: string) => {
      await addUserDevice(localStorage.getItem('userId') as string, device.id, userPlanId);
      closeModal();
  }

  return (
    <>
      <button type="button" className="btn btn-danger" onClick={openModal}>
        Add Phone
      </button>
      {isOpen && (
        <div className="modal fade show" tabIndex={-1} style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add this device to one of your plans:</h5>
              </div>
              <div>
                {userPlans?.map((userPlan, index) => (
                  <div className="modal-body" key={index} onClick={() => handleClick(userPlan.id)}>
                    {userPlan.plan.title}
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
};

export default Modal;