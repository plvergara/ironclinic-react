import React from 'react'
import { WithAuthConsumer } from '../context/AuthContext'
import Select from 'react-select'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AppointmentForm = ({ errorClassName, handleSubmit, handleChange, loading, professionals, patients, date, startHour, endHour }) => {
    const treatmentConst = [
        { name: 'treatment', value: 'quiropodia', label: 'quiropodia' },
        { name: 'treatment', value: 'estudio de la pisada', label: 'estudio de la pisada' },
        { name: 'treatment', value: 'estudio de la pisada con plantillas', label: 'estudio de la pisada con plantillas' },
        { name: 'treatment', value: 'órtesis de silicona', label: 'órtesis de silicona' },
        { name: 'treatment', value: 'cura papiloma', label: 'cura papiloma' },
        { name: 'treatment', value: 'cirugía ungueal', label: 'cirugía ungueal' },
        { name: 'treatment', value: 'cirugía papiloma', label: 'cirugía papiloma' },
        { name: 'treatment', value: 'otro', label: 'otro' }]

    return (
        <div className="AppointmentForm w-100 ">
            <form className="w-100 mb-5 mt-5 bx-shadow bg-white p-5" onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='date'>
                        Día
                    </label>

                    <input
                        value={date}
                        onChange={handleChange}
                        name='date'
                        type='date'
                        className={`form-control ${errorClassName}`}
                        id='date'
                        placeholder='Día'
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='startHour'>
                        Hora inicio
                    </label>

                    <input
                        value={startHour}
                        onChange={handleChange}
                        name='startHour'
                        type='time'
                        className={`form-control ${errorClassName}`}
                        id='startHour'
                        placeholder='Hora'
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='endHour'>
                        Hora fin
                    </label>

                    <input
                        value={endHour}
                        onChange={handleChange}
                        name='endHour'
                        type='time'
                        className={`form-control ${errorClassName}`}
                        id='endHour'
                        placeholder='Hora'
                    />
                </div>

                <div className='form-group mb4'>
                    <label htmlFor='patient'>
                        Paciente
                    </label>
                    <Row>
                        <Col>
                            <Select
                                options={patients}
                                onChange={handleChange}
                                className={`form-control clean ${errorClassName}`}

                            />
                        </Col>
                        <Col>
                            <Link className='btn btn-block btn-submit text-white' to="/patients/create">Nuevo Paciente</Link>
                        </Col>
                    </Row>

                </div>

                <div className='form-group mb4'>
                    <label htmlFor='professional'>
                        Profesional
                    </label>
                    <Select
                        options={professionals}
                        onChange={handleChange}
                        className={`form-control clean ${errorClassName}`}
                    />
                </div>

                <div className='form-group mb4'>
                    <label htmlFor='treatment'>
                        Tratamiento
                    </label>
                    <Select
                        options={treatmentConst}
                        onChange={handleChange}
                        className={`form-control clean ${errorClassName}`}
                    />
                </div>

                <button
                    type='submit'
                    className='btn btn-block btn-submit text-white mb-3'
                    disabled={loading}
                >
                    Añadir
                </button>
            </form>
        </div>
    )
}

export default WithAuthConsumer(AppointmentForm)