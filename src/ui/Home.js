import React from 'react'
import { WithAuthConsumer } from '../context/AuthContext'

const Home = _ => {
    return (
        <div className="Home">
            Hola
        </div>
    )
}

export default WithAuthConsumer(Home)