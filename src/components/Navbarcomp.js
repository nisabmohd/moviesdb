import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap';
import logo from '../ico/film-slate.png';
export const Navbarcomp = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" style={{display:'flex',alignItems:'center',marginTop:'2px'}}>Movies DB <img style={{width:'29px',marginLeft:'9px'}} src={logo} alt="" /></Navbar.Brand>
                    <Nav className="me-auto" style={{marginTop:'5px'}} >
                        <Nav.Link href="#features">Movies</Nav.Link>
                        <Nav.Link href="#pricing">TV Shows</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}