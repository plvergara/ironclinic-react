import React from 'react'
import { WithAuthConsumer } from '../context/AuthContext'
import IronClinicService from '../services/IronClinicService'
import ProfessionalForm from '../ui/ProfessionalForm'
import { Redirect } from 'react-router-dom'


class EditProfessional extends React.Component {

    state = {
        data: {
            cNumber: '',
            password: '',
            specialty: '',
            firstName: '',
            lastName: ''
        },
        sucess: false,
        error: false,
        loading: false
    }
    componentDidMount() {
        IronClinicService.listProfessional(this.props.match.params.id)
            .then(professional =>
                this.setState({
                    data:
                    {
                        cNumber: professional.cNumber,
                        specialty: professional.specialty,
                        firstName: professional.firstName,
                        lastName: professional.lastName
                    }
                })
            )
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

        this.setState({ loading: true, error: false }, () => {
            IronClinicService.updateProfessional(this.props.match.params.id, { ...this.state.data })
                .then(() =>
                    this.setState({ success: true })
                )
                .catch(() =>
                    this.setState({ error: true, loading: false })
                )
        })
    }

    render() {
        const errorClassName = this.state.error ? 'is-invalid' : ''

        if (this.state.success) {
            return <Redirect to="/" />
        }

        return <ProfessionalForm errorClassName={errorClassName}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            loading={this.state.loading}
            firstName={this.state.data.firstName}
            lastName={this.state.data.lastName}
            specialty={this.state.data.specialty}
            cNumber={this.state.data.cNumber} />

    }
}

export default WithAuthConsumer(EditProfessional)