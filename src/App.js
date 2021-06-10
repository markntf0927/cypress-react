import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

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
        <Route exact path="/login" component={Login} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
