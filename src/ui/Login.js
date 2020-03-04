import React from 'react'
import { WithAuthConsumer } from '../context/AuthContext'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const Login = ({ errorClassName, handleSubmit, handleChange, loading, cNumber, password }) => {
    return (
        <div className='Login'>
            <Form className="LoginForm" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>
                        Número de colegiado
                </Form.Label>

                    <Form.Control
                        value={cNumber}
                        onChange={handleChange}
                        autoComplete='off'
                        name='cNumber'
                        type='number'
                        className={`form-control ${errorClassName}`}
                        id='cNumber'
                        placeholder='Introduce tu número de colegiado'
                    />
                </Form.Group>

                <Form.Group className='mb4'>
                    <Form.Label>
                        Contraseña
                </Form.Label>

                    <Form.Control
                        value={password}
                        onChange={handleChange}
                        name='password'
                        type='password'
                        className={`form-control ${errorClassName}`}
                        id='password'
                        placeholder='Contraseña'
                    />
                </Form.Group>

                <Button
                    type='submit'
                    className='btn btn-block btn-submit text-white'
                    disabled={loading}
                >
                    Acceder
                </Button>
            </Form>
        </div>
    )
}

export default WithAuthConsumer(Login)