import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated'
import { WithAuthConsumer } from '../context/AuthContext';
import { Navbar } from 'react-bootstrap';


const Filter = ({ handleChange, options, date }) => {
    const animatedComponents = makeAnimated()

    return (
        <Navbar bg='light' className="mb-5 mt-5 bx-shadow" >
            <input
                value={date}
                onChange={handleChange}
                name='date'
                type='date'
                className="col-5 w-100 mr-auto"
                id='date'
                placeholder='Día'
            />
            <Select
                placeholder="Profesional"
                className="col-5 w-100 ml-auto"
                components={animatedComponents}
                onChange={handleChange}
                options={options}
            />
        </Navbar>
    )
}

export default WithAuthConsumer(Filter)