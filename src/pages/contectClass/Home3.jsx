// props - drilling

// import React from 'react'

// const Home3 = ({name}) => {
//   return (
//    <>
//     <h1>Home 3 Component</h1>
//     <h1>My name is {name}</h1>
//    </>
//   )
// }

// export default Home3

// useContext Hook

import React, { useContext } from 'react'
import { NameContext } from '../../App'

const Home3 = () => {
    const name = useContext(NameContext)
  return (
   <>
    <h1>Home 3 Component</h1>
    <h1>My name is {name}</h1>
   </>
  )
}

export default Home3