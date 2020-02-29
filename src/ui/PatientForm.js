import React from 'react'
import { WithAuthConsumer } from '../context/AuthContext'
import Select from 'react-select'

const PatientForm = ({ errorClassName, handleSubmit, handleChange, loading, idFormat, idNumber, firstName, lastName, phoneNumber }) => {
    const format = [{ value: 'DNI', label: 'DNI' },
    { value: 'NIE', label: 'NIE' },
    { value: 'Otro', label: 'Otro' }]

    return (
        <div className="PatientForm">
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='firstName'>
                        Nombre
                    </label>

                    <input
                        value={firstName}
                        onChange={handleChange}
                        autoComplete='off'
                        name='firstName'
                        type='string'
                        className={`form-control ${errorClassName}`}
                        id='firstName'
                        placeholder='Nombre'
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='lastName'>
                        Apellidos
                    </label>

                    <input
                        value={lastName}
                        onChange={handleChange}
                        autoComplete='off'
                        name='lastName'
                        type='string'
                        className={`form-control ${errorClassName}`}
                        id='lastName'
                        placeholder='Apellidos'
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='phoneNumber'>
                        Número de teléfono
                    </label>

                    <input
                        value={phoneNumber}
                        onChange={handleChange}
                        autoComplete='off'
                        name='phoneNumber'
                        type='number'
                        className={`form-control ${errorClassName}`}
                        id='phoneNumber'
                        placeholder='nº teléfono'
                    />
                </div>

                <div className='form-group mb4'>
                    <Select
                        options={format}
                        onChange={handleChange}
                        className={`form-control ${errorClassName}`}
                    />

                    <input
                        value={idNumber}
                        onChange={handleChange}
                        name='idNumber'
                        type='string'
                        className={`form-control ${errorClassName}`}
                        id='idNumber'
                        placeholder='Número de documento'
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

export default WithAuthConsumer(PatientForm)