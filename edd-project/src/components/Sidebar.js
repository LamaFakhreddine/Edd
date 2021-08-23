import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import LogoImg from '../assets/img/logo.png';
import "./Sidebar.scss";


export default function NavbarSection() {
    return (
        <div className="sidebar">
            <Navbar expand="true" variant="dark">
                <Container className="flex-column">
                    <Navbar.Brand href="#home">
                        <img src={LogoImg} alt="Edd Logo" className="navbar-logo"/>
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#home"><i class="fas fa-home"></i>Home</Nav.Link>
                        <Nav.Link href="#calendar"><i class="far fa-calendar"></i>Calendar</Nav.Link>
                        <Nav.Link href="#pricing"><i class="fas fa-tasks"></i>Tasks</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
