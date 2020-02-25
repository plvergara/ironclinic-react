import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch, Router, Route } from 'react-router-dom'
import Signin from './ui/Signin'
import AuthenticatedRoute from './components/AuthenticatedRoute'
import Home from './ui/Home'

const App = _ => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <AuthenticatedRoute exact path='/' component={Home} />
          <Route exact path='/signin' component={Signin} />
        </Switch>
      </Router>
    </div>
  )
}

export default App