import React from 'react'
import { WithAuthConsumer } from '../context/AuthContext'
import IronClinicService from '../services/IronClinicService'
import { Redirect } from 'react-router-dom'
import MHForm from '../ui/MHForm'


class CreateMedicalHistory extends React.Component {

    state = {
        data: {
            surgeries: '',
            illnesses: '',
            allergies: '',
            medications: '',
            diagnosticJudgment: '',
            patient: '',
        },
        patient: '',
        sucess: false,
        error: false,
        loading: false
    }

    componentDidMount() {
        IronClinicService.listPatient(this.props.match.params.id)
            .then(patient => this.setState({ data: { patient: patient } }))
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            data: {
                ...this.state.data,
                [name]: value
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        console.info(this.state.data)

        this.setState({ loading: true, error: false }, () => {
            IronClinicService.createMedicalHistory(this.state.data.patient.id, { ...this.state.data })
                .then(() => {
                    this.setState({ success: true })
                })
                .catch(() => {
                    this.setState({ error: true, loading: false })
                })
        })
    }

    render() {
        const errorClassName = this.state.error ? 'is-invalid' : ''

        if (this.state.success) {
            return <Redirect to="/" />
        }

        return <MHForm errorClassName={errorClassName}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            loading={this.state.loading}
            patient={this.state.data.patient}
            surgeries={this.state.data.surgeries}
            illnesses={this.state.data.illnesses}
            allergies={this.state.data.allergies}
            medications={this.state.data.medications}
            diagnosticJudgment={this.state.data.diagnosticJudgment} />

    }
}

export default WithAuthConsumer(CreateMedicalHistory)