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
    }, []); // Empty dependency array to run effect only once

    return (
        <div>
            <h2>Transaction List</h2>
            <ul>
                {transactions.map(transaction => (
                    <li key={transaction.id}>
                        {transaction.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionList;