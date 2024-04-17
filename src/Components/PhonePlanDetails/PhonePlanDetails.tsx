import React from 'react';
import { PhonePlan } from '../../Types/Types';
import './PhonePlanDetails.css'; // Import the stylesheet
import { addUserPlan } from '../../Services/PhonePlanDeviceServices';

interface PhonePlanProp {
    phonePlan: PhonePlan;
    backgroundImage: string; // Add a prop for the background image
}

export function PhonePlanDetails({ phonePlan, backgroundImage }: PhonePlanProp) {
    const heroStyle = {
        backgroundImage: `url(${backgroundImage})`,
    };

    const handleClick = async(id: string) => {
        await addUserPlan(localStorage.getItem('userId') as string, id);
    }

    return (
        <div className="hero" style={heroStyle}>
            <div className="container">
                <h1 id = 'phone-plan-title'>{phonePlan.title}</h1>
                <h2 className = 'phone-plan-subtitle'>Device limit: {phonePlan.deviceLimit}</h2>
                <h2 className = 'phone-plan-subtitle'>Price: ${phonePlan.price}/mo</h2>
                <div className="button-container">
                    <button type="button" className="btn btn-primary btn-lg" onClick={() => handleClick(phonePlan.id)}>Add plan</button>
                </div>  
            </div>
        </div>
    );
}