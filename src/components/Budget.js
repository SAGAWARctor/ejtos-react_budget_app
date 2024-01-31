import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
	const { budget } = useContext(AppContext);
	const [newBudget, setNewBudget] = useState(budget);
	const [error, setError] = useState('');

	const handleBudgetChange = (event) => {
		const value = event.target.value;
		if (value > 20000) {
			setError('Cannot exceed 20,000');}
        else if (value < budget) {
            setError('Budget cannot be lower than the initial budget');}
		else {
			setError('');
			setNewBudget(value);}
		}

    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
{error && <div style={{ color: 'red' }}>{error}</div>}
</div>
    );
};
export default Budget;
