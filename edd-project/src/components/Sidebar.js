import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import LogoImg from '../assets/img/logo.png';
import "./Sidebar.scss";


export default function NavbarSection() {
    return (
        <div className="sidebar-grid-item">
            <Navbar expand="true">
                <Container  className="d-flex justify-content-center">
                    <Navbar.Brand href="#home">
                        <img src={LogoImg} alt="Edd Logo" className="navbar-logo"/>
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#home" className="d-flex flex-column"><i className="fas fa-home fa-lg"></i>Home</Nav.Link>
                        <Nav.Link href="#calendar" className="d-flex flex-column"><i className="far fa-calendar fa-lg"></i>Calendar</Nav.Link>
                        <Nav.Link href="#pricing" className="d-flex flex-column"><i className="fas fa-tasks fa-lg"></i>Tasks</Nav.Link>
                        <Nav.Link href="#profile" className="d-flex flex-column"><i class="fas fa-user-circle fa-2x"></i>Profile</Nav.Link>
                    </Nav>
                    {/* 
                    <Nav className="align-self-end">
                        <Nav.Link href="#profile"><i class="fas fa-cog fa-2x"></i></Nav.Link>
                    </Nav> */}
                </Container>
            </Navbar>
        </div>
    )
}
