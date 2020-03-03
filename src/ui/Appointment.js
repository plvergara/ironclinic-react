import React from 'react'
import { WithAuthConsumer } from '../context/AuthContext'
import { Link } from 'react-router-dom'

const ListAppointments = ({ appointment }) => {
    const { patient, professional, date, startHour, endHour } = appointment
    const day = new Date(date)
    console.info(typeof (day), day)
    return (
        <div className="card w-100 mb-3">
            <div className="card-body">
                <p className="card-subtitle mb-2 text-muted">{day.getDate()}/{day.getMonth() + 1}/{day.getFullYear()}</p>

                <p className="card-text">
                    {patient.firstName} {patient.lastName}
                </p>
                <Link to={`/patients/${patient.id}/medicalhistory`} className="d-block">Historia Clínica</Link>


                <Link to="/TODO" className="d-block">{professional.firstName} {professional.lastName}</Link>
            </div>
        </div>
    )
}

export default WithAuthConsumer(ListAppointments)