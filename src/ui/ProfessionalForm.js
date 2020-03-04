import React from 'react'
import { WithAuthConsumer } from '../context/AuthContext'

const ProfessionalForm = ({ errorClassName, handleSubmit, handleChange, loading, cNumber, password, firstName, lastName, specialty }) => {
    return (
        <div className="ProfessionalForm w-100">
            <form className="w-100 mb-5 mt-5 bx-shadow bg-white p-5" onSubmit={handleSubmit}>
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
                    <label htmlFor='specialty'>
                        Especialidad
                    </label>

                    <input
                        value={specialty}
                        onChange={handleChange}
                        autoComplete='off'
                        name='specialty'
                        type='string'
                        className={`form-control ${errorClassName}`}
                        id='specialty'
                        placeholder='Especialidad'
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='cNumber'>
                        Número de colegiado
                    </label>

                    <input
                        value={cNumber}
                        onChange={handleChange}
                        autoComplete='off'
                        name='cNumber'
                        type='number'
                        className={`form-control ${errorClassName}`}
                        id='cNumber'
                        placeholder='Introduce tu número de colegiado'
                    />
                </div>

                <div className='form-group mb4'>
                    <label htmlFor='password'>
                        Contraseña
                    </label>

                    <input
                        value={password}
                        onChange={handleChange}
                        name='password'
                        type='password'
                        className={`form-control ${errorClassName}`}
                        id='password'
                        placeholder='Contraseña'
                    />
                </div>

                <button
                    type='submit'
                    className='btn btn-block btn-submit text-white mb-3'
                    disabled={loading}
                >
                    Aceptar
                </button>
            </form>
        </div>
    )
}

export default WithAuthConsumer(ProfessionalForm)