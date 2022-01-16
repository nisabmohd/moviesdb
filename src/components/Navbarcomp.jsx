import React from 'react'
import { Navbar, Container, Nav, Offcanvas} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../ico/film-slate.png';
export const Navbarcomp = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" expand={false}>
                <Container fluid>
                    <div className='mx-2 my-2'>

                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        <Navbar.Brand><Link style={{textDecoration:'none',color:'white'}} to="/">Movies-DB</Link></Navbar.Brand>
                    </div>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Movies-DB</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link><Link style={{textDecoration:'none'}} to="/">Movies</Link></Nav.Link>
                                <Nav.Link><Link style={{textDecoration:'none'}} to="/tv">TV Shows</Link></Nav.Link>
                                <Nav.Link><Link style={{textDecoration:'none'}} to="/search">Search</Link></Nav.Link>

                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

        </>
    )
}