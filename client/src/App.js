import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Transactions from './pages/Transactions/Transactions';
import Reports from './pages/Reports/Reports';
import Bills from './pages/Bills/Bills';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/transactions" element={<Transactions />} />
          <Route exact path="/reports" element={<Reports />} />
          <Route exact path="/bills" element={<Bills />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
