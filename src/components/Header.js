import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import '../App.css';
const Header = () => {
    return (
        <div class="div-1">
        <Navbar 
        bg="#040404" 
        expand="lg" 
        sticky="top" 
        variant="dark" 
        className="py-4" 
        collapseOnSelect
        >
            <Container fluid="md">
                <Navbar.Brand 
                href="/portfolio-demo" 
                style={{fontSize:"26px", 
                borderRight:"2px solid grey",
                padding:"0 10px"}}
                >Rey Viene Dean Pasiculan
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{padding: "0 10px"}}
                        navbarScroll
                    >
                        
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#projects">Services</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                    </Nav>
                    <Button 
                        href="#contact" 
                        className="d-flex" 
                        variant="outline-success" 
                        size="md"
                        style={{margin: "0 10px", maxWidth: "25vw", justifyContent: "center"}}
                    >
                        Contact
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
};

export default Header;