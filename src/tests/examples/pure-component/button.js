import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../../styles/main.scss'

const Button = () => {
  const [count, setCount] = useState(0)

  const clicker = () => {
    setCount(count + 1)
  }

  return (
    <>
      <button data-cy="btn" onClick={clicker}>
        click
      </button>
      <div>
        clicked <span data-cy="count">{count}</span>
      </div>
    </>
  )
}

export default Button
