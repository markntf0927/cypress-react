import React, { useState } from 'react'
import './styles/main.scss';

import logo from './assets/img/logo.svg'

function App() {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div className="App">
      <header className="App-header">
        <button className="toggle-btn" onClick={handleToggle}>Toggle here to change state</button>

        <div className="toggle-status">
          {`Current <Toggle> state is: ${toggle}`}
        </div>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
