import Header from '../../Components/Header';
import NavBar from '../../Components/NavBar';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <>
            {<Header/>}
            {<NavBar/>}
            <div className='dashboard-container'>
            </div>
        </>
    )
}
export default Dashboard;