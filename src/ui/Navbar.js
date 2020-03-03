import React from 'react'
import { WithAuthConsumer } from '../context/AuthContext'
import { Link } from 'react-router-dom'


const Navbar = ({ currentUser, logout }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light mb-5 border-bottom border-light">
            <div className="container d-flex align-items-center">
                <div>
                    <Link className="navbar-brand" to="/">
                        <i className="fa fa-heartbeat" />
                        <strong>Iron</strong>Clinic
                    </Link>
                </div>

                {currentUser && (
                    <div className="navbar-right">
                        <div>
                            <button className="btn btn-danger btn-sm" onClick={logout}>
                                <i className="fa fa-power-off" />
                            </button>
                        </div>

                        <div>
                            <Link className="btn btn-md" to='/professionals/create' >
                                Nuevo Profesional
                            </Link>
                        </div>
                        <div>
                            <Link className="btn btn-md" to='/patients/create' >
                                Nuevo Paciente
                            </Link>
                        </div>
                        <div>
                            <Link className="btn btn-md" to='/appointments/create' >
                                Nueva Cita
                            </Link>
                        </div>
                        <div>
                            <Link className="btn btn-md" to='/patients' >
                                Ver Pacientes
                            </Link>
                        </div>
                    </div>
                )}

            </div>
        </nav>
    )
}

export default WithAuthConsumer(Navbar)