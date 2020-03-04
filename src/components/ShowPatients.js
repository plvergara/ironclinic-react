import React from 'react'
import { WithAuthConsumer } from '../context/AuthContext'
import IronClinicService from '../services/IronClinicService'
import { Card } from 'react-bootstrap'
import PatientCard from '../ui/PatientCard'

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
                <div className="PatientsList">
                    {this.state.patients.map((patient, i) => (
                        <PatientCard patient={patient} key={i} />
                    ))}
                </div>
            </div>
        )
    }

}

export default WithAuthConsumer(ListPatients)