import React from 'react'
import { WithAuthConsumer } from '../context/AuthContext'

const Signin = ({ errorClassName, handleSubmit, handleChange, loading, cNumber, password }) => {
    return (
        <div className="Signin">
            <form onSubmit={handleSubmit}>
                <div className='from-group'>
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

                <div className='from-group mb5'>
                    <label htmlFor='password'>
                        Número de colegiado
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
                    className='btn btn-block btn-primary mb-4'
                    disable={loading}
                >
                    Sign In
                </button>
            </form>
        </div>
    )
}

export default WithAuthConsumer(Signin)