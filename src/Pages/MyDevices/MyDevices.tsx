import { useEffect, useState } from 'react';
import Header from '../../Components/Header'
import NavBar from '../../Components/NavBar'
import MyDeviceList from '../../Components/MyDeviceList';
import { deleteUserPlan } from '../../Services/PhonePlanServices';
import { getUserPlans } from '../../Services/UserPlanServices';
import { UserPlan } from '../../Types/Types';
import trashpng from '../../Assets/trash.png'
import { useNavigate } from 'react-router-dom'
import './MyDevices.css'


export function MyDevices() {
    const navigate = useNavigate();

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

    // Render a sidebar with a list of user plans - if mobile, render a dropdown
    return (
        <>
            {<Header/>}
            {<NavBar/>}
            {window.innerWidth <= 1000 ? (
                <div className="topnav">
                    <h1 style={{ color: 'white' }}> My Plans</h1>
                    {userPlans.length === 0 ? (
                        <>
                            <p>Nothing to see here...</p>
                            <button className="btn btn-primary" onClick={() => navigate('/phoneplans')}>Browse Phone Plans</button>
                        </>
                    ) : (
                        <nav className="nav flex-column">
                            {userPlans.map((currentPlan, index) => (
                                <a style={{color: 'grey'}} className={`nav-link ${currentPlan === userPlan ? 'highlighted' : ''}`} href="#!" onClick={() => setUserPlan(userPlans[index])} key={index}>{currentPlan.plan.title}</a>
                            ))}
                        </nav>
                    )}
                </div>
            ) : (
                <div className="sidenav">
                    <h1 style={{textAlign: 'center'}}> My Plans</h1>
                    {userPlans.length === 0 ? (
                        <>
                            <p>Nothing to see here...</p>
                            <button className="btn btn-primary" onClick={() => navigate('/phoneplans')}>Browse Phone Plans</button>
                        </>
                    ) : (
                        userPlans.map((currentPlan, index) => (
                            <div id='plan-item' className={` ${currentPlan === userPlan ? 'highlighted' : ''}`} onClick={() => setUserPlan(userPlans[index])} key={index}>
                                <span>{currentPlan.plan.title}</span>
                                <img id='trash-img' src={trashpng} alt="delete plan" onClick={() => deletePlan(currentPlan.id)} />
                            </div>
                        ))
                    )}
                </div>
            )}

            <div className="main">
                {userPlan && <MyDeviceList userPlan={userPlan}/>}
            </div>
        </>
    )
}