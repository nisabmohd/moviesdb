import React from 'react'
import { Navbar, Container, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../ico/movie-frame.png';
export const Navbarcomp = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark" sticky="top" expand="lg">
                <Container>
                    <Navbar.Brand><Link style={{ textDecoration: 'none',color:'white' }} to="/"><img src={logo} style={{width:'35px'}} alt="" /> Movies DB</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link style={{ textDecoration: 'none',color:'white' }} to="/">Movies</Link></Nav.Link>
                            <Nav.Link><Link style={{ textDecoration: 'none',color:'white'  }} to="/tv">TV Shows</Link></Nav.Link>
                            <Nav.Link><Link style={{ textDecoration: 'none',color:'white'  }} to="/search">Search</Link></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}