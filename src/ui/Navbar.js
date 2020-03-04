import React from 'react'
import { WithAuthConsumer } from '../context/AuthContext'
import { Navbar, Nav, Button } from 'react-bootstrap'


const Nvbar = ({ currentUser, logout }) => {
    return (
        <Navbar className="bx-shadow" sticky="top" bg='light' expand='lg'>
            <Navbar.Brand href='/'>
                <i className="fa fa-heartbeat" />
                <strong>Iron</strong>Clinic
            </Navbar.Brand>



            {currentUser && (
                <Nav className="ml-auto">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav.Link href="/professionals/create">Nuevo Profesional</Nav.Link>
                        <Nav.Link href="/patients/create">Nuevo Paciente</Nav.Link>
                        <Nav.Link href="/appointments/create">Nueva Cita</Nav.Link>
                        <Nav.Link href="/patients">Ver Pacientes</Nav.Link>
                        <Nav.Link href="/professionals">Ver Profesionales</Nav.Link>

                    </Navbar.Collapse>
                </Nav>

            )}
            {currentUser && (
                <Button className="ml-3" variant="danger" onClick={logout}>
                    <i className="fa fa-power-off text-white m-auto" />
                </Button>
            )}

        </Navbar>
    )
}

export default WithAuthConsumer(Nvbar)