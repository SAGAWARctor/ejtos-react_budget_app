import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import '../style.css'

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
        };

        const decreaseExpense = (name, cost) => {
            dispatch({
                type: 'SUBB_EXPENSE',
                payload: { name, cost: 10 }
            });
            };

    return (
        <tr>
        <td>{props.name}</td>
        <td>£{props.cost}</td>
        <td><button class="custom-button-green" onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button class="custom-button-red" onClick={() => decreaseExpense(props.name)}>-</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};
export default ExpenseItem;
