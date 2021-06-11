import React from 'react'

export default function Child({ data }) {
  return (
    <section>
      <h5>This is Child Component</h5>
      
      <div>data @child:</div>
      <p data-cy="child-data">{data}</p>
    </section>
  )
}
