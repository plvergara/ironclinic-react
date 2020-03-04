import React from 'react'
import { WithAuthConsumer } from '../context/AuthContext'
import IronClinicService from '../services/IronClinicService'
import MHForm from '../ui/MHForm'
import { Redirect } from 'react-router-dom'

class AppointmentDetail extends React.Component {
    state = {
        appointment: {},
        MH: {},
        sucess: false,
        error: false,
        loading: true
    }

    async componentDidMount() {
        const sState = (a, m) => {
            this.setState({ appointment: a, MH: m })
            this.setState({ loading: false })
        }
        const appointment = await IronClinicService.listAppointment(this.props.match.params.id)
        const MH = await IronClinicService.listMedicalHistory(appointment.patient.id)
        await sState(appointment, MH)

    }

    render() {
        const errorClassName = this.state.error ? 'is-invalid' : ''
        console.info(this.state.MH)
        console.info(this.state.appointment)
        console.info(this.state.loading)

        if (this.state.success) {
            return <Redirect to="/" />
        }
        if (!this.state.loading) {
            return (
                <div className="Appointment">
                    <MHForm errorClassName={errorClassName}
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                        loading={this.state.loading}
                        patient={this.state.MH.patient}
                        surgeries={this.state.MH.surgeries}
                        illnesses={this.state.MH.illnesses}
                        allergies={this.state.MH.allergies}
                        medications={this.state.MH.medications}
                        diagnosticJudgment={this.state.MH.diagnosticJudgment}
                    />


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