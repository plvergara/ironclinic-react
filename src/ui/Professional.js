import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated'
import { WithAuthConsumer } from '../context/AuthContext';


const Professional = ({ handleChange, options }) => {
    const animatedComponents = makeAnimated()

    return (
        <Select
            components={animatedComponents}
            onChange={handleChange}
            isMulti
            options={options}
        />
    )
}

export default WithAuthConsumer(Professional)