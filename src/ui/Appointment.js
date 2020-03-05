import React from 'react'
import { WithAuthConsumer } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const ListAppointments = ({ appointment }) => {
    const { patient, professional, date, startHour, treatment } = appointment
    const day = new Date(date)
    const sHour = new Date(startHour)
    return (
        <Card className="bx-shadow mb-2" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title className="bg-info"><span className="h5 col-6 text-white">{sHour.getHours().toString().padStart(2, 0)} : {sHour.getMinutes().toString().padStart(2, 0)}</span>
                    <span className="h6 col-4 text-light">{day.getDate().toString().padStart(2, 0)}/{(day.getMonth() + 1).toString().padStart(2, 0)}/{day.getUTCFullYear()}</span>
                </Card.Title>


                <Card.Text>{patient.firstName} {patient.lastName}</Card.Text>
                <Card.Text>{professional.firstName} {professional.lastName}</Card.Text>
                <Card.Text>{treatment}</Card.Text>
                <Card.Text >{appointment.price} €</Card.Text>
                {patient.number && (
                    <Link to={`/appointments/${appointment.id}`} className="btn btn-submit text-white">Ir</Link>
                )}
                {!patient.number && (
                    <Link to={`/patients/${patient.id}/medicalhistory`} className="btn btn-submit text-white">Ir</Link>
                )}



            </Card.Body >
        </Card >
    )
}

export default WithAuthConsumer(ListAppointments)