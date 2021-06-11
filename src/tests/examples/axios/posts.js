import React, { useState, useEffect } from 'react'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../styles/main.scss'

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchPost()
  }, [])

  const fetchPost = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users'

    const res = await axios.get(url)

    if (!res) return console.log('axios error')

    setPosts(res.data)
  }

  return (
    <>
      {posts &&
        posts.length > 0 &&
        posts.map((itm, idx) => (
          <div data-cy="post" className="post" key={idx}>
            <p>{itm.id}</p>
            <p>{itm.username}</p>
            <p>{itm.name}</p>
            <p>{itm.phone}</p>
          </div>
        ))}
    </>
  )
}

export default Posts
