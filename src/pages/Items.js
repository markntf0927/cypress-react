import React from 'react'

import Layout from '../components/shared/Layout'

import Todo from '../components/Todo'

function Items() {
  return (
    <Layout>
      <div className="App">
        <Todo />
      </div>
    </Layout>
  )
}

export default Items
