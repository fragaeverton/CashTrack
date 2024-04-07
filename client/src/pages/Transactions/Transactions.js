import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TransactionList = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        async function fetchTransactions() {
            try {
                const response = await axios.get('/api/transactions'); // Assuming your backend API endpoint is '/api/transactions'
                setTransactions(response.data);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        }

        fetchTransactions();
    }, []); 

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString(); // Adjust locale as needed
    };

    
    const handleEdit = (id) => {
        // Implement edit functionality here
        console.log('Editing transaction with id:', id);
    };

    const handleDelete = (id) => {
        // Implement delete functionality here
        console.log('Deleting transaction with id:', id);
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Transaction List</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Debit</th>
                        <th>Credit</th>
                        <th>Amount</th>
                        <th>Observation</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{formatDate(transaction.date)}</td>
                            <td>{transaction.bill.debitName}</td>
                            <td>{transaction.bill.creditName}</td>
                            <td>{transaction.amount}</td>
                            <td>{transaction.observation}</td>
                            <td>
                                <button
                                    className="btn btn-primary me-1"
                                    onClick={() => handleEdit(transaction.id)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(transaction.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionList;