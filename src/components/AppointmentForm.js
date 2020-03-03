import React from 'react'
import { WithAuthConsumer } from '../context/AuthContext'
import IronClinicService from '../services/IronClinicService'
import { Redirect } from 'react-router-dom'
import AppointmentForm from '../ui/AppointmentForm'


class CreateAppointment extends React.Component {

    state = {
        data: {
            date: '',
            startHour: '',
            endHour: '',
            patient: '',
            professional: '',
            treatment: '',
        },
        patients: [],
        professionals: [],
        sucess: false,
        error: false,
        loading: false
    }

    componentDidMount() {
        IronClinicService.listPat()
            .then(patients =>
                this.setState({
                    patients: patients.map(patient => ({
                        name: "patient",
                        value: patient.id,
                        label: `${patient.firstName} ${patient.lastName} ${patient.identification.number}`
                    }))
                }))





        IronClinicService.listPro()
            .then(professionals => this.setState({
                professionals: professionals.map(professional => ({
                    name: 'professional',
                    value: professional.id,
                    label: `${professional.firstName} ${professional.lastName} ${professional.cNumber}`
                }))
            }))
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
            console.info(this.state.data)
            IronClinicService.createAppointment({ ...this.state.data })
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

        return <AppointmentForm errorClassName={errorClassName}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            loading={this.state.loading}
            date={this.state.data.date}
            startHour={this.state.data.startHour}
            endHour={this.state.data.endHour}
            professionals={this.state.professionals}
            patients={this.state.patients} />

    }
}

export default WithAuthConsumer(CreateAppointment)