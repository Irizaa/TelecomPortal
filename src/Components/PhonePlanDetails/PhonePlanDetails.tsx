import { PhonePlan } from '../../Types/Types';
import './PhonePlanDetails.css';
import { addUserPlan } from '../../Services/PhonePlanServices';

interface PhonePlanProp {
    phonePlan: PhonePlan;
    backgroundImage: string;
}

export function PhonePlanDetails({ phonePlan, backgroundImage }: PhonePlanProp) {
    const heroStyle = {
        backgroundImage: `url(${backgroundImage})`,
    };

    const addPlan = async(id: string) => {
        await addUserPlan(localStorage.getItem('userId') as string, id);
    }

    return (
        <div className="hero" style={heroStyle}>
            <div className="container">
                <h1>{phonePlan.title}</h1>
                <h2>Device limit: {phonePlan.deviceLimit}</h2>
                <h2>Price: ${phonePlan.price}/mo</h2>
                <div className="button-container">
                    <button type="button" className="btn btn-primary btn-lg" onClick={() => addPlan(phonePlan.id)}>Add plan</button>
                </div>  
            </div>
        </div>
    );
}