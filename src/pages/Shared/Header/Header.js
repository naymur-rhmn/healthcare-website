import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../images/logo.png'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/home#home"><img src={logo} alt="" /><span className="fw-bold fs-3">Dental Care</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link className="fw-bold" as={Link} to="/home#home">Home</Nav.Link>
                            <Nav.Link className="fw-bold" as={Link} to="link">Link</Nav.Link>
                            <Nav.Link className="fw-bold" as={Link} to="link">Link</Nav.Link>
                            <Nav.Link className="fw-bold" as={Link} to="link">Link</Nav.Link>

                        </Nav>
                        {user?.email && <Navbar.Text className="ms-auto me-3">
                            Hi! {user?.displayName}
                        </Navbar.Text>}

                        {user?.email ? <button onClick={logOut} className="btn fw-bold btn-secondary">Logout</button> : <Link to="/login"><Button className="me-2" variant="primary">Login</Button></Link>}

                        {!user?.email && <Link to="/register"><Button variant="info">Register</Button></Link>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;