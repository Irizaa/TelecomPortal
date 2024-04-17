import { useEffect, useState } from 'react';
import Header from '../../Components/Header'
import NavBar from '../../Components/NavBar'
import './MyDevices.css'
import { deleteUserPlan, getUserDevicesByPlan } from '../../Services/PhonePlanDeviceServices';
import { Device, UserDevice, UserPlan } from '../../Types/Types';
import { getUserPlans } from '../../Services/UserPlanServices';
import trashpng from '../../Assets/trash.png'
import MyDeviceList from '../../Components/MyDeviceList';

export function MyDevices() {

    const deletePlan = async(id: string) => {
        await deleteUserPlan(localStorage.getItem('userId') as string, id);
    }

    const [userPlans, setUserPlans] = useState([] as UserPlan[]);
    const [userPlan, setUserPlan] = useState<UserPlan | undefined>(undefined);

    useEffect(() => {
        getUserPlans(localStorage.getItem('userId') as string).then((response: any) => {
            setUserPlans(response.data);
            setUserPlan(response.data[0]);
        });
    }, []);


    return (
        <div className=''>
            {<Header/>}
            {<NavBar/>}
            <div className="sidenav">
                <h1> My Plans</h1>
                {userPlans.map((userPlan, index) => (
                <div id = 'plan-item'>
                    <a key={index} href="#" onClick={() => setUserPlan(userPlans[index])}>{userPlan.plan.title}</a>
                    <img id='trash-img' src={trashpng} alt="trash" onClick={() => deletePlan(userPlan.id)} />
                </div>
                ))}
            </div>

                <div className="main">
                    {userPlan && <MyDeviceList userPlan={userPlan}/>}
                </div>
            </div>
    )
}