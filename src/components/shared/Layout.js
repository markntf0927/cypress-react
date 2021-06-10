import React, { memo } from 'react'

import Header from './Header'

function Layout({ children }) {
  return (
    <main>
      <Header />
      <div className="content">{children}</div>
    </main>
  )
}

export default memo(Layout)
