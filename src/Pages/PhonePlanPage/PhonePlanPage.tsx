import React, {useEffect, useState} from "react";
import Header from "../../Components/Header";
import {PhonePlan} from "../../Types/Types";
import {getPhonePlans} from "../../Services/PhonePlanDeviceServices";
import {PhonePlanDetails} from "../../Components/PhonePlanDetails/PhonePlanDetails";

export function PhonePlanPage() {
    const [phonePlans, setPhonePlans] = useState([] as PhonePlan[])

    useEffect(() => {
        getPhonePlans().then(response => {
            setPhonePlans(response.data);
        });
    }, [setPhonePlans]);

    return (
        <div>
            {<Header/>}
            <br></br>
            <br></br>
            <div>
                {phonePlans.map(phonePlan => (<PhonePlanDetails phonePlan={phonePlan}/>))}
            </div>
        </div>
    )
}