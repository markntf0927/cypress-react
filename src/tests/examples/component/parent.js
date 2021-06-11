import React from 'react'
import Child from './child'

export default function Contact({ text, data}) {
  return (
    <div>
      <h5>text @parent:</h5>
      <p data-cy="parent-text">{text}</p>
      
      <hr/>

      <Child data={data} />
    </div>
  )
}
