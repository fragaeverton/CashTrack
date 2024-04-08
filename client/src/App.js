import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Transactions from './pages/Transactions/Transactions';
import Reports from './pages/Reports/Reports';
import Bills from './pages/Bills/Bills';
import Login from './components/Login/Login'; // Import the Login component


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false); 

   // Function to handle login
   const handleLogin = () => {
      // Implement your login logic here
      setIsLoggedIn(true); // For demo purposes, setting isLoggedIn to true
    };

    // Function to handle logout
    const handleLogout = () => {
      // Implement your logout logic here
      setIsLoggedIn(false); // For demo purposes, setting isLoggedIn to false
    };


  return (
    <Router>
      <div>
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/transactions" element={<Transactions />} />
          <Route exact path="/reports" element={<Reports />} />
          <Route exact path="/bills" element={<Bills />} />
          {isLoggedIn ? (
            <>
              <Route path="/private-route" element={<PrivateComponent />} />
              <Route path="*" element={<Navigate to="/private-route" />} />
            </>
          ) : (
            <Route path="/login" element={<Login onLogin={handleLogin} />} /> 
          )}
        </Routes>
      </div>
    </Router>
  );
}

// PrivateComponent to be shown after login
const PrivateComponent = () => {
  return <h2>Private Content</h2>;
};

export default App;
