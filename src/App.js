import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PlanForm from './components/PlanForm';
import PlanList from './components/PlanList';
import './App.css';

const App = () => {
    const [plans, setPlans] = useState([]);
    const [currentPlan, setCurrentPlan] = useState(null);

    const fetchPlans = async () => {
        const response = await fetch('http://datlatmaiiu.onrender.com/plans');
        const data = await response.json();
        setPlans(data);
    };

    const savePlan = async (plan) => {
        if (currentPlan) {
            await fetch(`http://datlatmaiiu.onrender.com/plans/${currentPlan.id}`, {
                method: 'PUT',
                body: JSON.stringify(plan),
                headers: { 'Content-Type': 'application/json' }
            });
        } else {
            await fetch('http://datlatmaiiu.onrender.com/plans', {
                method: 'POST',
                body: JSON.stringify(plan),
                headers: { 'Content-Type': 'application/json' }
            });
        }
        fetchPlans();
        setCurrentPlan(null);
    };

    const handleEdit = (plan) => {
        setCurrentPlan(plan);
    };

    useEffect(() => {
        fetchPlans();
    }, []);

    return (
        <div className="app">
            <Header />
            <PlanForm currentPlan={currentPlan} setCurrentPlan={setCurrentPlan} onSave={savePlan} />
            <PlanList plans={plans} onEdit={handleEdit} />
        </div>
    );
};

export default App;
