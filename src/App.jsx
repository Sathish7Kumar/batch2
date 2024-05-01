import './App.css'
import React, { useEffect, useState } from 'react'
import State from './pages/State'
import ClassProps from './pages/ClassProps'
import FuncProps from './pages/FuncProps'
import Lifecycle from './pages/Lifecycle'
import Effect from './pages/Effect'
import Home1 from './pages/contectClass/Home1'
import { createContext } from 'react'
import Reducer from './pages/Reducer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomepageRoute from './pages/HomepageRoute'
import Navigation from './pages/Navigation'
import Vote from './pages/Vote'


export const NameContext = createContext()
export const BalanceContext = createContext()

 function App () {

  // const [name, setname] = useState("Ms Dhoni")
  const [balance, setbalance] = useState(1000)
  
    return (
      <>
     <BrowserRouter>
     <Navigation/>
     <BalanceContext.Provider value={balance}>
      <Routes>
      <Route path='/' element={<HomepageRoute/>} />
      <Route path='/reducer' element={<Reducer/>} />
      <Route path='/state' element={<State/>} />
      <Route path='/effect' element={<Effect/>} />
      <Route path='/classprops' element={<ClassProps/>} />
      <Route path='/funcprops' element={<FuncProps/>} />
      <Route path='/lifecycle' element={<Lifecycle/>} />
      <Route path='/vote' element={<Vote/>} />
      </Routes>
      </BalanceContext.Provider>
     </BrowserRouter>
      </>
    )
}
export default App

// properties : props
// props can use in both class & function component

// props is the keyword only for class component , if u accessing
// the props keyword this keyword must 

// props is not a keyword in function component
// 1. give any name to parameter and use that parametername.propertyname
// 2. give the propertname directly to the parameter enclosed with {}
// for ex ({propertyName})


