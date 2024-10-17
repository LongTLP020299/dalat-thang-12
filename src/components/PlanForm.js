import React, { useState, useEffect } from 'react';
import './PlanForm.css';
const PlanForm = ({ currentPlan, setCurrentPlan, onSave }) => {
    const [formData, setFormData] = useState({
        location: '',
        date: '',
        note: '',
        cost: ''
    });

    useEffect(() => {
        if (currentPlan) {
            setFormData(currentPlan);
        }
    }, [currentPlan]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        setFormData({ location: '', date: '', note: '', cost: '' }); // Reset form
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
            <input type="datetime-local" name="date" value={formData.date} onChange={handleChange} required />
            <textarea name="note" placeholder="Notes" value={formData.note} onChange={handleChange}></textarea>
            <input type="number" name="cost" placeholder="Cost" value={formData.cost} onChange={handleChange} required />
            <button type="submit">Save Plan</button>
        </form>
    );
};

export default PlanForm;
