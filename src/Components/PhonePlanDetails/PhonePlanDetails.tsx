import {PhonePlan} from "../../Types/Types";

interface PhonePlanProp {
    phonePlan: PhonePlan
}

export function PhonePlanDetails({phonePlan}: PhonePlanProp) {
    return (
        <div>
            <h1>{phonePlan.title}</h1>
            <br></br>
            <h2>Device limit: {phonePlan.deviceLimit}</h2>
            <h2>Price: {phonePlan.price}</h2>
            {/*<p>{phonePlan.id}</p>*/}
        </div>
    )
}
