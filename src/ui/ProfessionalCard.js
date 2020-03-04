import React from 'react'
import { WithAuthConsumer } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const ProfessionalCard = ({ professional }) => {
    return (
        <Card className="ProfessionalCard bx-shadow">
            <Card.Body>
                <Card.Title className="bg-info text-white p-3">{professional.firstName} {professional.lastName}</Card.Title>

                <Card.Text>
                    <b className="upper">{professional.specialty}</b> {professional.cNumber}
                </Card.Text>
                <Link to={`/professionals/${professional.id}`} className="btn btn-submit text-white">Editar</Link>

            </Card.Body>
        </Card>
    )
}

export default WithAuthConsumer(ProfessionalCard)