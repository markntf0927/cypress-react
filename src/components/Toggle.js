import React, { useState, memo } from 'react'

function Toggle() {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <section>
      <button className="toggle-btn" onClick={handleToggle}>
        Toggle here to change state
      </button>

      <div className="toggle-status">
        {`Current <Toggle> state is: ${toggle}`}
      </div>
    </section>
  )
}

export default memo(Toggle)
