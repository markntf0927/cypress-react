import React, { memo } from "react"

// import withLogger from '../../hoc/withLogger'

function Content({ text, ...rest }) {
  return (
    <div {...rest}>
      <p>{text}</p>
    </div>
  )
}

export default memo(Content)
// export default memo(withLogger(Content))
