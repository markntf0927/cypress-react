import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { isLoggedIn } from './services/auth'

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss'

import Home from './pages/Home'
import Items from './pages/Items'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/items" component={Items} />
        <Route exact path="/login">
          {isLoggedIn() ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
