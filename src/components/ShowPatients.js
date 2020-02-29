import React from 'react'
import { WithAuthConsumer } from '../context/AuthContext'
import IronClinicService from '../services/IronClinicService'

class ListPatients extends React.Component {
    state = {
        patients: []
    }

    componentDidMount() {
        IronClinicService.listPat()
            .then(patients => this.setState({ patients }))

    }

    render() {
        return (
            <div className="Patients">
                {this.state.patients.map((patient, i) => (
                    <div>
                        <p>{patient.firstName}</p>
                        <p>{patient.lastName}</p>
                        <p>{patient.number}</p>
                        <p>{patient.identification.number}</p>
                    </div>
                ))}
            </div>
        )
    }

}

export default WithAuthConsumer(ListPatients)