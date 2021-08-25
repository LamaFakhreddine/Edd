import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import LogoImg from '../assets/img/logo.png';
import "./Sidebar.scss";


export default function NavbarSection() {
    return (
        <div className="sidebar">
            <Navbar expand="true">
                <Container className="d-flex justify-content-center">
                    <Navbar.Brand href="#home">
                        <img src={LogoImg} alt="Edd Logo" className="navbar-logo"/>
                    </Navbar.Brand>
                    <Nav className="">
                        <Nav.Link href="#home" className="d-flex flex-column"><i class="fas fa-home fa-lg"></i>Home</Nav.Link>
                        <Nav.Link href="#calendar" className="d-flex flex-column"><i class="far fa-calendar fa-lg"></i>Calendar</Nav.Link>
                        <Nav.Link href="#pricing" className="d-flex flex-column"><i class="fas fa-tasks fa-lg"></i>Tasks</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
