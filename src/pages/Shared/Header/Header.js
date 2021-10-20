import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../images/logo.png'
import { NavHashLink } from 'react-router-hash-link';
import './Header.css'

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
                            <Nav.Link className="fw-bold navlink" as={NavHashLink} to="/home#home" activeClassName="selected"
                                activeStyle={{ color: '#0D81C8' }}>HOME</Nav.Link>
                            <Nav.Link className="fw-bold navlink" as={NavLink} to="/about" activeClassName="selected"
                                activeStyle={{ color: '#0D81C8' }}>ABOUT US</Nav.Link>
                            <Nav.Link className="fw-bold navlink" as={NavHashLink} to="/home#services" activeClassName="selected"
                                activeStyle={{ color: '#0D81C8' }}>SERVICES</Nav.Link>
                            {/* <Nav.Link className="fw-bold navlink" as={NavHashLink} to="/doctors" activeClassName="selected"
                                activeStyle={{ color: '#0D81C8' }}>DOCTORS</Nav.Link> */}
                            <Nav.Link className="fw-bold navlink" as={NavLink} to="/contact" activeClassName="selected"
                                activeStyle={{ color: '#0D81C8' }}>CONTACT US</Nav.Link>

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