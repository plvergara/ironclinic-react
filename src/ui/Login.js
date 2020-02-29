import React from 'react'
import { WithAuthConsumer } from '../context/AuthContext'

const Login = ({ errorClassName, handleSubmit, handleChange, loading, cNumber, password }) => {
    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
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
                    className='btn btn-block btn-primary mb-3'
                    disabled={loading}
                >
                    Sign In
                </button>
            </form>
        </div>
    )
}

export default WithAuthConsumer(Login)