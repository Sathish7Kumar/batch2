import React, { createContext, useState } from 'react'
import Accd from './BootstrapPage/Accd';
import Navs from './BootstrapPage/Navs';
import Greetings from './condition/Greetings';

const App2 = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false)
  return (
    <>
    {/* <Navs/> */}
    <Greetings isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}  />
    </>
  )
}

export default App2