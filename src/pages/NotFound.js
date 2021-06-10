import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../components/shared/Layout'

function NotFound() {
  return (
    <Layout>
      <div className="App">
        <p>
          404 not found <Link to="/">Back to Homepage</Link>
        </p>
      </div>
    </Layout>
  )
}

export default NotFound
