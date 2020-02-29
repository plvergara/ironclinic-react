import React from 'react'
import { Redirect } from 'react-router-dom'

import Login from '../ui/Login'
import { WithAuthConsumer } from '../context/AuthContext'
import IronClinicService from '../services/IronClinicService'


class LoginForm extends React.Component {

    state = {
        data: {
            cNumber: '',
            password: ''
        },
        error: false,
        loading: false
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
            IronClinicService.login({ ...this.state.data })
                .then(
                    user => {
                        this.props.setUser(user)
                    },
                    _ => {
                        this.setState({ error: true, loading: false })
                    }
                )
        })
    }

    render() {
        const errorClassName = this.state.error ? 'is-invalid' : ''

        if (this.props.currentUser) {
            return <Redirect to="/" />
        }
        return <Login errorClassName={errorClassName}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            loading={this.state.loading}
            cNumber={this.state.data.cNumber}
            password={this.state.data.password} />

    }
}

export default WithAuthConsumer(LoginForm)