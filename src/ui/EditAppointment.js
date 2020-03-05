import React from 'react'
import { WithAuthConsumer } from '../context/AuthContext'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

const EditAppointment = ({ errorClassName, handleSubmit, handleChange, loading, appointment, patients, professionals }) => {
    const treatmentConst = [
        { name: 'treatment', value: 'quiropodia', label: 'quiropodia' },
        { name: 'treatment', value: 'estudio de la pisada', label: 'estudio de la pisada' },
        { name: 'treatment', value: 'estudio de la pisada con plantillas', label: 'estudio de la pisada con plantillas' },
        { name: 'treatment', value: 'órtesis de silicona', label: 'órtesis de silicona' },
        { name: 'treatment', value: 'cura papiloma', label: 'cura papiloma' },
        { name: 'treatment', value: 'cirugía ungueal', label: 'cirugía ungueal' },
        { name: 'treatment', value: 'cirugía papiloma', label: 'cirugía papiloma' },
        { name: 'treatment', value: 'otro', label: 'otro' }]

    const priceConst = [
        { name: 'price', value: 15, label: '15' },
        { name: 'price', value: 20, label: '20' },
        { name: 'price', value: 22, label: '22' },
        { name: 'price', value: 30, label: '30' },
        { name: 'price', value: 50, label: '50' },
        { name: 'price', value: 75, label: '75' },
        { name: 'price', value: 130, label: '130' },
        { name: 'price', value: 150, label: '150' }]
    const day = new Date(appointment.date)
    const startHour = new Date(appointment.startHour)
    const endHour = new Date(appointment.endHour)
    const dayStr = `${day.getFullYear()}-${(day.getMonth() + 1).toString().padStart(2, 0)}-${day.getDate().toString().padStart(2, 0)}`
    const startHourSt = `${startHour.getHours().toString().padStart(2, 0)}:${startHour.getMinutes().toString().padStart(2, 0)}`
    const endHourSt = `${endHour.getHours().toString().padStart(2, 0)}:${endHour.getMinutes().toString().padStart(2, 0)}`
    const animatedComponents = makeAnimated()
    return (
        <div className="EditAppointment w-100 ">
            <form className="w-100 mb-5 mt-5 bx-shadow bg-white p-5" onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='date'>
                        Día
                    </label>

                    <input
                        value={dayStr}
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
                        value={startHourSt}
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
                        value={endHourSt}
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
                    <Select
                        defaultInputValue={`${appointment.patient.firstName} ${appointment.patient.lastName}`}
                        components={animatedComponents}
                        options={patients}
                        onChange={handleChange}
                        className={`form-control clean ${errorClassName}`}
                    />
                </div>

                <div className='form-group mb4'>
                    <label htmlFor='professional'>
                        Profesional
                    </label>
                    <Select
                        defaultInputValue={`${appointment.professional.firstName} ${appointment.professional.lastName}`}
                        options={professionals}
                        components={animatedComponents}
                        onChange={handleChange}
                        className={`form-control clean ${errorClassName}`}
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='reasons'>
                        Motivo consulta
                    </label>

                    <input
                        value={appointment.reasons}
                        onChange={handleChange}
                        name='reasons'
                        type='string'
                        className={`form-control ${errorClassName}`}
                        id='reasons'
                        placeholder='Motivo Consulta'
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='diagnosis'>
                        Diagnóstico
                    </label>

                    <input
                        value={appointment.diagnosis}
                        onChange={handleChange}
                        name='diagnosis'
                        type='string'
                        className={`form-control ${errorClassName}`}
                        id='diagnosis'
                        placeholder='Diagnóstico'
                    />
                </div>

                <div className='form-group mb4'>
                    <label htmlFor='treatment'>
                        Tratamiento
                    </label>
                    <Select
                        defaultInputValue={appointment.treatment}
                        components={animatedComponents}
                        options={treatmentConst}
                        onChange={handleChange}
                        className={`form-control clean ${errorClassName}`}
                    />
                </div>
                <div className='form-group mb4'>
                    <label htmlFor='price'>
                        Precio
                    </label>
                    <Select
                        options={priceConst}
                        components={animatedComponents}
                        onChange={handleChange}
                        className={`form-control clean ${errorClassName}`}
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

export default WithAuthConsumer(EditAppointment)