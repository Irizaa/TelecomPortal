import { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import NavBar from '../../Components/NavBar';
import './BillingPage.css';
import { calculateMonthlyBill, getUserBills, payBill } from '../../Services/BillingServices';
import { Billing, PhonePlan, PhonePlanWithBill } from '../../Types/Types';

const BillingPage = () => {
    const [monthlyBill, setMonthlyBill] = useState({} as Record<string, { totalAmount: number, plans: PhonePlanWithBill[] }>);
    const [expandedBill, setExpandedBill] = useState<string | null>(null);

    useEffect(() => {
        getUserBills(localStorage.getItem('userId') as string).then(response => {
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
                        <th scope="col" style={{ width: '50%' }}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(monthlyBill).map(([dueDate, monthlyBill]) => (
                        <tr key={dueDate} onClick={() => handleRowClick(dueDate)}>
                            <td className="billing-data">{dueDate}</td>
                            <td className="billing-data">
                                {monthlyBill.totalAmount > 0 ? (
                                    <>
                                        Outstanding Balance: ${monthlyBill.totalAmount}
                                    </>
                                ) : (
                                    <p>Paid</p>
                                )}
                                {expandedBill === dueDate && (
                                    <div id = 'expanded-div'>
                                        {monthlyBill.plans.map((plan, index) => (
                                            <div key={index} style={{ marginBottom: '10px' }}>
                                                <p>{plan.title} - {plan.price}</p>
                                                <button className="btn btn-danger" style={{ width: '25%' }} onClick={() => handlePlanClick(plan.billingId)}>Pay Bill</button>
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
