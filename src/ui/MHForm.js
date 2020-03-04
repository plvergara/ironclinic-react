import React from 'react'
import { WithAuthConsumer } from '../context/AuthContext'
import { Form, Button } from 'react-bootstrap'

const MHForm = ({ errorClassName,
    handleSubmit,
    handleChange,
    loading,
    patient,
    illnesses,
    allergies,
    surgeries,
    medications,
    diagnosticJudgment }) => {

    return (
        <div className="MHForm w-100">
            <Form className="w-100 mb-5 mt-5 bx-shadow bg-white p-5" onSubmit={handleSubmit}>
                <Form.Control plaintext readOnly defaultValue={patient.firstName} />
                <Form.Control plaintext readOnly defaultValue={patient.lastName} />

                <Form.Group>
                    <Form.Label>
                        Enfermedades
                    </Form.Label>

                    <Form.Control
                        value={illnesses}
                        onChange={handleChange}
                        name='illnesses'
                        type='string'
                        className={`form-control ${errorClassName}`}
                        placeholder='Enfermedades'
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Alergias
                    </Form.Label>

                    <Form.Control
                        value={allergies}
                        onChange={handleChange}
                        name='allergies'
                        type='string'
                        className={`form-control ${errorClassName}`}
                        id='allergies'
                        placeholder='Alergias'
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>
                        Intervenciones
                    </Form.Label>

                    <Form.Control
                        value={surgeries}
                        onChange={handleChange}
                        name='surgeries'
                        type='string'
                        className={`form-control ${errorClassName}`}
                        id='surgeries'
                        placeholder='Intervenciones'
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>
                        Medicamentos
                    </Form.Label>

                    <Form.Control
                        value={medications}
                        onChange={handleChange}
                        name='medications'
                        type='string'
                        className={`form-control ${errorClassName}`}
                        id='medications'
                        placeholder='Medicamentos'
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>
                        Juicio diagnóstico
                    </Form.Label>

                    <Form.Control
                        value={diagnosticJudgment}
                        onChange={handleChange}
                        name='diagnosticJudgment'
                        type='string'
                        className={`form-control ${errorClassName}`}
                        id='diagnosticJudgment'
                        placeholder='Juicio diagnóstico'
                    />
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

export default WithAuthConsumer(MHForm)