import React, { memo } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../../styles/main.scss'

const Pure = ({ children, ...rest }) => {
  return (
    <div data-cy="pure-comp" {...rest}>
      {children}
    </div>
  )
}

export default memo(Pure)
