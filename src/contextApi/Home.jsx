import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <h1>Homepage</h1>
    <Link to='/products'>Click here to products</Link>
    </>
  )
}

export default Home