import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Header(){
    return(        
        <Navbar bg="dark" variant="dark" expand="lg">
            <div className="container">
                <Navbar.Brand as={Link} to="/">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav" >
                    <div className={window.innerWidth > 992 ? 'd-flex justify-content-between w-100':''}>
                        <Nav className="mr-auto">
                            <Nav.Link  as={Link} to="/transactions">Transactions</Nav.Link>
                            <Nav.Link  as={Link} to="/bills">Bills</Nav.Link>
                            <Nav.Link  as={Link} to="/reports">Reports</Nav.Link>
                        </Nav>
                        <Nav>
                            <Button variant="primary">Login</Button>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default Header;