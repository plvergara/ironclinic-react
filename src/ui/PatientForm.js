import React from 'react'
import { WithAuthConsumer } from '../context/AuthContext'
import Select from 'react-select'
import { Form, Button, Row, Col } from 'react-bootstrap'

const PatientForm = ({ errorClassName, handleSubmit, handleChange, loading, idFormat, idNumber, firstName, lastName, phoneNumber }) => {
    const format = [{ value: 'DNI', label: 'DNI' },
    { value: 'NIE', label: 'NIE' },
    { value: 'Otro', label: 'Otro' }]

    return (
        <div className="PatientForm w-100">
            <Form className="w-100 mb-5 mt-5 bx-shadow bg-white p-5" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>
                        Nombre
                    </Form.Label>

                    <Form.Control
                        value={firstName}
                        onChange={handleChange}
                        autoComplete='off'
                        name='firstName'
                        type='string'
                        className={`form-control ${errorClassName}`}
                        id='firstName'
                        placeholder='Nombre'
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Apellidos
                    </Form.Label>

                    <Form.Control
                        value={lastName}
                        onChange={handleChange}
                        autoComplete='off'
                        name='lastName'
                        type='string'
                        className={`form-control ${errorClassName}`}
                        id='lastName'
                        placeholder='Apellidos'
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Número de teléfono
                    </Form.Label>

                    <Form.Control
                        value={phoneNumber}
                        onChange={handleChange}
                        autoComplete='off'
                        name='phoneNumber'
                        type='number'
                        className={`form-control ${errorClassName}`}
                        id='phoneNumber'
                        placeholder='nº teléfono'
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>
                        Documento de identidad
                    </Form.Label>
                    <Row>
                        <Col>
                            <Select
                                options={format}
                                onChange={handleChange}
                                className={`form-control clean ${errorClassName}`}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                value={idNumber}
                                onChange={handleChange}
                                name='idNumber'
                                type='string'
                                className={`form-control ${errorClassName}`}
                                id='idNumber'
                                placeholder='Número de documento'
                            />
                        </Col>
                    </Row>
                </Form.Group>

                <Button
                    type='submit'
                    className='btn btn-block btn-submit text-white mb-3'
                    disabled={loading}
                >
                    Aceptar
                </Button>
            </Form>
        </div>
    )
}

export default WithAuthConsumer(PatientForm)