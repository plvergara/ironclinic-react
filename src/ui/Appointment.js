import React from 'react'
import { WithAuthConsumer } from '../context/AuthContext'

const ListAppointments = ({ appointment }) => {
    const { patient, professional, date } = appointment
    return (
        <div className="card w-100 mb-3">
            <div className="card-body">
                <p className="card-subtitle mb-2 text-muted">{date}</p>

                <p className="card-text">
                    {professional.name.firstName}
                </p>


                <a href="/TODO" className="d-block">{patient.name.firstName}</a>
            </div>
        </div>
    )
}

export default WithAuthConsumer(ListAppointments)