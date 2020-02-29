import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch, Route } from 'react-router-dom'

import AuthenticatedRoute from './components/AuthenticatedRoute'
import Home from './components/Home'

import Navbar from './ui/Navbar'
import Login from './components/Login'
import ProfessionalForm from './components/ProfessionalForm'
import PatientForm from './components/PatientForm'
import ShowPatients from './components/ShowPatients'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <main className='container'>
          <Switch>
            <AuthenticatedRoute exact path='/'>
              <Home />
            </AuthenticatedRoute>
            <AuthenticatedRoute exact path='/professionals/create'>
              <ProfessionalForm />
            </AuthenticatedRoute>
            <AuthenticatedRoute exact path='/patients/create'>
              <PatientForm />
            </AuthenticatedRoute>
            <AuthenticatedRoute exact path='/patients'>
              <ShowPatients />
            </AuthenticatedRoute>
            <Route exact path='/login'>
              <Login />
            </Route>
          </Switch>
        </main>
      </div>
    )
  }
}


export default App