import React from 'react'
import { WithAuthConsumer } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const PatientCard = ({ patient }) => {
    return (
        <Card className="PatientCard bx-shadow">
            <Card.Body>
                <Card.Title className="bg-info text-white p-3">{patient.firstName} {patient.lastName}</Card.Title>

                <Card.Text>
                    <b className="upper">{patient.identification.format}</b> {patient.identification.number}
                </Card.Text>
                <Card.Text>
                    <b className="upper">tel</b> {patient.phoneNumber}
                </Card.Text>
                <Link to={`/patients/${patient.id}`} className="btn btn-submit text-white">Editar</Link>

            </Card.Body>
        </Card>
    )
}

export default WithAuthConsumer(PatientCard)