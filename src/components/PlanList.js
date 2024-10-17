import React from 'react';
import './PlanList.css';

const PlanList = ({ plans, onEdit }) => {
    return (
        <ul>
            {plans.map(plan => (
                <li key={plan.id}>
                    <h3>{plan.location}</h3>
                    <p>{plan.date}</p>
                    <p>{plan.note}</p>
                    <p>Cost: {plan.cost}</p>
                    <button onClick={() => onEdit(plan)}>Edit</button>
                </li>
            ))}
        </ul>
    );
};

export default PlanList;
