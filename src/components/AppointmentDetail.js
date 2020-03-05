import React from 'react'
import { WithAuthConsumer } from '../context/AuthContext'
import IronClinicService from '../services/IronClinicService'
import { Redirect } from 'react-router-dom'
import EditAppointment from '../ui/EditAppointment'
import MHView from '../ui/MHView'

class AppointmentDetail extends React.Component {
    state = {
        appointment: [],
        MH: [],
        sucess: false,
        error: false,
        loading: true,
        professionals: [],
        patients: []
    }

    async componentDidMount() {
        await IronClinicService.listPat()
            .then(patients =>
                this.setState({
                    patients: patients.map(patient => ({
                        name: "patient",
                        value: patient.id,
                        label: `${patient.firstName} ${patient.lastName} ${patient.identification.number}`
                    }))
                }))





        await IronClinicService.listPro()
            .then(professionals => this.setState({
                professionals: professionals.map(professional => ({
                    name: 'professional',
                    value: professional.id,
                    label: `${professional.firstName} ${professional.lastName} ${professional.cNumber}`
                }))
            }))
        const sState = (a, m) => {
            this.setState({ appointment: a, MH: m })
            this.setState({ loading: false })
        }
        const appointment = await IronClinicService.listAppointment(this.props.match.params.id)
        const MH = await IronClinicService.listMedicalHistory(appointment.patient.id)
        await sState(appointment, MH)

    }

    handleChange = (event) => {
        let { name, value } = ''
        if (!event.target) {
            name = event.name
            value = event.value
        } else {
            name = event.target.name
            value = event.target.value
        }
        this.setState({
            data: {
                ...this.state.data,
                [name]: value
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.setState({ loading: true, error: false }, () => {
            IronClinicService.updateAppointment(this.state.appointment.id, { ...this.state.data })
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
        if (!this.state.loading) {
            return (
                <div className="Appointment">
                    <MHView MH={this.state.MH}
                    />
                    <EditAppointment
                        errorClassName={errorClassName}
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                        loading={this.state.loading}
                        appointment={this.state.appointment}
                        patients={this.state.patients}
                        professionals={this.state.professionals} />
                </div>
            )
        }

        return (
            <div>
                Hola

            </div>
        )

    }

}

export default WithAuthConsumer(AppointmentDetail)