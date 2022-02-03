import React from 'react'
import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {

    return (
        <header>
                
        
            <Navbar className='py-2 fixed-top' bg="light" variant="light" expand="lg" collapseOnSelect >
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand className="h1 text-capitalize">Employees Scheduling System </Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">

                            <LinkContainer to='/addemployee'>
                                <Nav.Link ><i class='fas fa-user-plus'></i> Add Employee</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/addemployee'>
                                <Nav.Link ><i class='fas fa-tasks'></i> Add Job</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
