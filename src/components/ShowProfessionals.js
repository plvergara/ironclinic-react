import React from 'react'
import { WithAuthConsumer } from '../context/AuthContext'
import IronClinicService from '../services/IronClinicService'
import ProfessionalCard from '../ui/ProfessionalCard'

class ListProfessionals extends React.Component {
    state = {
        professional: []
    }

    componentDidMount() {
        IronClinicService.listPro()
            .then(professional => this.setState({ professional }))

    }

    render() {
        return (
            <div>
                <div className="Professionals w-100">
                    <div className="ProfessionalsList">
                        {this.state.professional.map((professional, i) => (
                            <ProfessionalCard professional={professional} key={i} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }

}

export default WithAuthConsumer(ListProfessionals)