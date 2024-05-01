import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
    <nav>
        <ul>
            <li><Link to='/' >Home</Link></li>
            <li><Link to='/state' >State</Link></li>
            <li><Link  to='/effect' >Effect</Link></li>
            <li><Link  to='/reducer' >Reducer</Link></li>
            <li><Link  to='/classprops' >Class Props</Link></li>
            <li><Link  to='/vote' >Vote</Link></li>
        </ul>
    </nav>
    </>
  )
}

export default Navigation