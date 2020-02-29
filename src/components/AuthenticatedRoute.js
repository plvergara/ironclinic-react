import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { WithAuthConsumer } from '../context/AuthContext'


const AuthenticatedRoute = (props) => {
    if (!props.currentUser) {
        return <Redirect to='/login' />
    } else {
        return <Route {...props} />
    }
}

export default WithAuthConsumer(AuthenticatedRoute)