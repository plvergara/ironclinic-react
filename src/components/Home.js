import React from 'react'
import IronClinicService from '../services/IronClinicService'
import { WithAuthConsumer } from '../context/AuthContext'
import Appointment from '../ui/Appointment'
import Professional from '../ui/Professional'

class Home extends React.Component {
    state = {
        appointments: [],
        professionals: [],
        professional: '',
        loading: true
    }

    componentDidMount() {
        IronClinicService.listPro()
            .then(professionals => {
                professionals.map(professional => (
                    this.state.professionals.push({ value: professional.firstName, label: professional.firstName })
                ))
                this.state.professionals.push({ value: '', label: 'Todos' })

            })
        IronClinicService.listAPro(this.state.professional)
            .then(appointments => {
                this.setState({ appointments, loading: false })
            })
    }

    handleChange = professional => {
        this.setState({ professional: professional });
        IronClinicService.listAPro(professional)
            .then(appointments => {
                this.setState({ appointments, loading: false })
            })

    }

    render() {
        return (
            <div className="Home">
                <Professional
                    handleChange={this.handleChange}
                    options={this.state.professionals} />
                <div className="Appointments">
                    {this.state.appointments.map((appointment, i) => (
                        <Appointment appointment={appointment} key={i} />
                    ))}
                </div>
            </div>
        )
    }
}

export default WithAuthConsumer(Home)

