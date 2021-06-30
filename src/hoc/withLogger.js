import React from "react"

function WithLogger(WrappedComponent) {
  return function (props) {
    console.log("withLogger: props", props)
    return <WrappedComponent {...props} />
  }
}

export default WithLogger
