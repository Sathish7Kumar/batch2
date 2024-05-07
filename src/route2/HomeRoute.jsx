import React from 'react'
import { Link } from 'react-router-dom'

const HomeRoute = () => {
  return (
    <div>
        <h1>HomeRoute</h1>
        <Link to='/products'>products</Link>
    </div>
  )
}

export default HomeRoute