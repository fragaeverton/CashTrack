import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BillList = () => {
    const [bills, setBills] = useState([]);

    useEffect(() => {
        async function fetchBills() {
            try {
                const response = await axios.get('/api/bills'); // Assuming your backend API endpoint is '/api/transactions'
                setBills(response.data);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        }

        fetchBills();
    }, []); 
    
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
            <h2 className="mb-4">Bills List</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Group</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bills.map(bill => (
                        <tr key={bill.id}>
                            <td>{bill.name}</td>
                            <td>{bill.group.name}</td>
                            <td>
                                <button
                                    className="btn btn-primary me-1"
                                    onClick={() => handleEdit(bill.id)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(bill.id)}
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

export default BillList;