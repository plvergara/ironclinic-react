import React from 'react'
import IronClinicService from '../services/IronClinicService'
import { WithAuthConsumer } from '../context/AuthContext'
import Appointment from '../ui/Appointment'
import Filter from '../ui/Filter'

class Home extends React.Component {
    state = {
        appointments: [],
        professionals: [],
        professional: '',
        date: '',
        loading: true
    }

    componentDidMount() {
        IronClinicService.listPro()
            .then(professionals => {
                professionals.map(professional => (
                    this.state.professionals.push({ name: 'professional', value: professional.firstName, label: professional.firstName })
                ))
                this.state.professionals.push({ name: 'professional', value: '', label: 'Todos' })

            })

        const day = new Date()

        const dayString = `${day.getFullYear()}-${(day.getMonth() + 1).toString().padStart(2, 0)}-${day.getDate().toString().padStart(2, 0)}`

        IronClinicService.listADate(dayString)
            .then(appointments => {
                return this.setState({ appointments, loading: false })
            })

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
        if (name === 'professional') {
            IronClinicService.listAPro(value)
                .then(appointments => {
                    this.setState({ appointments, loading: false })
                })
        }

        if (name === 'date') {
            IronClinicService.listADate(value)
                .then(appointments => {
                    this.setState({ appointments, loading: false })
                })
        }

        this.setState({
            [name]: value
        })

    }

    render() {
        return (
            <div className="Home w-100">
                <Filter
                    handleChange={this.handleChange}
                    options={this.state.professionals} />
                <div className="Appointments">
                    {this.state.appointments.map((appointment, i) => (
                        < Appointment appointment={appointment} key={i} />
                    ))}
                </div>
            </div>
        )
    }
}

export default WithAuthConsumer(Home)

