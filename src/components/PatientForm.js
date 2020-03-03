import React from 'react'
import { WithAuthConsumer } from '../context/AuthContext'
import IronClinicService from '../services/IronClinicService'
import { Redirect } from 'react-router-dom'
import PatientForm from '../ui/PatientForm'


class CreatePatient extends React.Component {

    state = {
        data: {
            phoneNumber: '',
            idFormat: '',
            idNumber: '',
            firstName: '',
            lastName: '',
            patients: [],
            professionals: [],
        },
        sucess: false,
        error: false,
        loading: false
    }

    handleChange = (event) => {
        let { name, value } = ''

        if (!event.target) {
            name = "idFormat"
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
            IronClinicService.createPatient({ ...this.state.data })
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

        return <PatientForm errorClassName={errorClassName}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            loading={this.state.loading}
            firstName={this.state.data.firstName}
            lastName={this.state.data.lastName}
            phoneNumber={this.state.data.phoneNumber}
            idFormat={this.state.data.idFormat}
            idNumber={this.state.data.idNumber} />

    }
}

export default WithAuthConsumer(CreatePatient)