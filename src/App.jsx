import './App.css'
import React from 'react'
import State from './pages/State'
import ClassProps from './pages/ClassProps'
import FuncProps from './pages/FuncProps'
import Lifecycle from './pages/Lifecycle'

 class App extends React.Component {
  render() {
    return (
      <>
      {/* <h1>React Class </h1>
      <ClassProps mobile="Samsung"/>
      <FuncProps order="iphone" price="1500"/>
      <State/> */}
      <Lifecycle/>
      </>
    )
  }
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


