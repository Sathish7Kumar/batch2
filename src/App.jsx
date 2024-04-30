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

export const NameContext = createContext()
export const BalanceContext = createContext()

 function App () {

  // const [name, setname] = useState("Ms Dhoni")
  const [balance, setbalance] = useState(1000)
  
    return (
      // <>
      // {/* <h1>React Class </h1>
      // <ClassProps mobile="Samsung"/>
      // <FuncProps order="iphone" price="1500"/>
      // <State/> */}
      // {/* <Lifecycle/> */}
      // {/* <Effect/> */}
      // <Home1 name={name}/>
      // </>
      // <>
      // <NameContext.Provider value={name}>
      //   <Home1/>
      // </NameContext.Provider>
      // </>
      <>
      <BalanceContext.Provider value={balance}>
        <Reducer/>
      </BalanceContext.Provider>
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


