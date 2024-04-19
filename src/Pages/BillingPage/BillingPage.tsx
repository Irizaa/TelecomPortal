import { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import NavBar from '../../Components/NavBar';
import './BillingPage.css';
import { calculateMonthlyBill, getUserBills, payBill } from '../../Services/BillingServices';
import { PhonePlanWithBill } from '../../Types/Types';

const BillingPage = () => {
    const [monthlyBill, setMonthlyBill] = useState({} as Record<string, { totalAmount: number, plans: PhonePlanWithBill[] }>);
    const [expandedBill, setExpandedBill] = useState<string | null>(null);

    useEffect(() => {
        getUserBills(localStorage.getItem('userId') as string).then(response => {
            console.log(response.data)
            setMonthlyBill(calculateMonthlyBill(response.data));
        });
    }, []);

    const handlePlanClick = async(billingId: string) => {
        await payBill(localStorage.getItem('userId') as string, billingId);
    };
    
    const handleRowClick = (dueDate: string) => {
        if (expandedBill === dueDate) {
            setExpandedBill(null);
        } else {
            setExpandedBill(dueDate);
        }
    };
    console.log(monthlyBill)


    return (
        <>
            <Header />
            <NavBar />
            <table className="table" style={{ borderCollapse: 'collapse' }}>
                <thead>
                    <tr className="table-dark">
                        <th scope="col" style={{ width: '30%' }}>Due Date</th>
                        <th scope="col" style={{ width: '60%' }}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(monthlyBill).map(([dueDate, monthlyBill]) => (
                        <tr key={dueDate} onClick={() => handleRowClick(dueDate)}>
                            <td>{dueDate}</td>
                            <td>
                                Outstanding Balance: ${monthlyBill.totalAmount.toFixed(2)}
                                {expandedBill === dueDate && (
                                    <div id='expanded-div'>
                                        {monthlyBill.plans.map((plan, index) => (
                                            <div key={index}>                                                
                                                <p>{plan.title} - ${plan.price} </p>
                                                <button className="btn btn-danger" 
                                                style={{ width: '30%' }} 
                                                onClick={() => handlePlanClick(plan.billingId)}>Pay Bill
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default BillingPage;
