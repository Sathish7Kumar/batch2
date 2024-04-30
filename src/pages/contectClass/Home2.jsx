//  props - drilling

// import React from 'react'
// import Home3 from './Home3'

// const Home2 = ({name}) => {
//   return (
//     <>
//     <h1>Home 2 Component</h1>
//     <Home3 name={name}/>
//     </>
//   )
// }

// export default Home2

// useContext Hook

import React, { useContext } from 'react'
import Home3 from './Home3'
import { NameContext } from '../../App'

const Home2 = () => {
    const x = useContext(NameContext)
  return (
    <>
    <h1>Home 2 {x}</h1>
    <Home3/>
    </>
  )
}

export default Home2