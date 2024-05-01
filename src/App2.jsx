import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomepageRoute from './pages/HomepageRoute'
import State from './pages/State'
import Effect from './pages/Effect'
import Navigation from './pages/Navigation'

const App2 = () => {
  return (
    <>
    <BrowserRouter>
    <Navigation/>
    <Routes>
        <Route path='/' element={<HomepageRoute/>} />
        <Route path='/state' element={<State/>} />
        <Route path='/effect' element={<Effect/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App2