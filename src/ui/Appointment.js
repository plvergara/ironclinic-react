import React from 'react'
import { WithAuthConsumer } from '../context/AuthContext'

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


                <a href="/TODO" className="d-block">{professional.firstName} {professional.lastName}</a>
            </div>
        </div>
    )
}

export default WithAuthConsumer(ListAppointments)