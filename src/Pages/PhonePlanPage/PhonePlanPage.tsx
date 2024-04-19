import {useEffect, useState} from "react";
import Header from "../../Components/Header";
import NavBar from "../../Components/NavBar";
import {PhonePlanDetails} from "../../Components/PhonePlanDetails/PhonePlanDetails";
import {PhonePlan} from "../../Types/Types";
import {getPhonePlans} from "../../Services/PhonePlanServices";
import "./PhonePlanPage.css";
import space1 from '../../Assets/space-1.png'
import space2 from '../../Assets/space-2.png'
import space3 from '../../Assets/space-3.png'

const backgroundImages = [space1, space2, space3];

export function PhonePlanPage() {
    const [phonePlans, setPhonePlans] = useState([] as PhonePlan[])

    useEffect(() => {
        getPhonePlans().then(response => {
            setPhonePlans(response.data);
        });
    }, [setPhonePlans]);

    return (
        <>
            {<Header/>}
            {<NavBar/>}
            <div>
                {phonePlans.map((phonePlan, index) => (
                <PhonePlanDetails 
                phonePlan={phonePlan}
                backgroundImage={backgroundImages[index % backgroundImages.length]}
                />
            ))}
            </div>
        </>
    )
}