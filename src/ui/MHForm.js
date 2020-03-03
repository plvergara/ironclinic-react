import React from 'react'
import { WithAuthConsumer } from '../context/AuthContext'

const AppointmentForm = ({ errorClassName, handleSubmit, handleChange, loading, patient, illnesses, allergies, surgeries, medications, diagnosticJudgment }) => {

    return (
        <div className="AppointmentForm">
            <form onSubmit={handleSubmit}>
                <h4 className='form-group'>
                    {patient.firstName} {patient.lastName}
                </h4>
                <div className='form-group'>
                    <label htmlFor='illnesses'>
                        Enfermedades
                    </label>

                    <input
                        value={illnesses}
                        onChange={handleChange}
                        name='illnesses'
                        type='string'
                        className={`form-control ${errorClassName}`}
                        id='illnesses'
                        placeholder='Enfermedades'
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='allergies'>
                        Alergias
                    </label>

                    <input
                        value={allergies}
                        onChange={handleChange}
                        name='allergies'
                        type='string'
                        className={`form-control ${errorClassName}`}
                        id='allergies'
                        placeholder='Alergias'
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='surgeries'>
                        Intervenciones
                    </label>

                    <input
                        value={surgeries}
                        onChange={handleChange}
                        name='surgeries'
                        type='string'
                        className={`form-control ${errorClassName}`}
                        id='surgeries'
                        placeholder='Intervenciones'
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='medications'>
                        Medicamentos
                    </label>

                    <input
                        value={medications}
                        onChange={handleChange}
                        name='medications'
                        type='string'
                        className={`form-control ${errorClassName}`}
                        id='medications'
                        placeholder='Medicamentos'
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='diagnosticJudgment'>
                        Juicio diagnóstico
                    </label>

                    <input
                        value={diagnosticJudgment}
                        onChange={handleChange}
                        name='diagnosticJudgment'
                        type='string'
                        className={`form-control ${errorClassName}`}
                        id='diagnosticJudgment'
                        placeholder='Juicio diagnóstico'
                    />
                </div>


                <button
                    type='submit'
                    className='btn btn-block btn-primary mb-3'
                    disabled={loading}
                >
                    Añadir
                </button>
            </form>
        </div>
    )
}

export default WithAuthConsumer(AppointmentForm)