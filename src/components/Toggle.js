import React, { useState, memo } from 'react'
import { Button } from 'react-bootstrap'

function Toggle() {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <section>
      <Button className="toggle-btn" onClick={handleToggle}>
        Toggle here to change state
      </Button>

      <div className="toggle-status">
        {`Current <Toggle> state is: ${toggle}`}
      </div>
    </section>
  )
}

export default memo(Toggle)
