import React from 'react'
import { WithAuthConsumer } from '../context/AuthContext'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MHView = ({ MH }) => {

    return (
        <Card className="MHCard bx-shadow">
            <Card.Body>
                <Card.Title className="bg-info text-white p-3">Historia médica{MH.patient.firstName} {MH.patient.lastName}</Card.Title>

                <Card.Text>
                    <b className="upper">{MH.patient.identification.format}</b> {MH.patient.identification.number}
                </Card.Text>
                <Card.Text>
                    <b className="upper">Enfermedades</b> {MH.illnesses}
                </Card.Text>
                <Card.Text>
                    <b className="upper">Alérgias</b> {MH.allergies}
                </Card.Text>
                <Card.Text>
                    <b className="upper">Medicamentos</b> {MH.medications}
                </Card.Text>

                <Card.Text>
                    <b className="upper">Juicio diagnóstico</b> {MH.diagnosticJudgment}
                </Card.Text>
                <Link to={`/patients/${MH.patient.id}/medicalhistory`} className="btn btn-submit text-white">Editar</Link>

            </Card.Body>
        </Card>
    )
}

export default WithAuthConsumer(MHView)