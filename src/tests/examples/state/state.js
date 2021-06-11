import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../styles/main.scss'

const Button = ({ onChange }) => {
  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show)
    onChange(!show)
  }

  return (
    <button
      onClick={handleShow}
      data-cy="state-btn"
    >
      {show === true ? 'Turn off' : 'Turn on'}
    </button>
  )
}

export default Button
