import React from 'react'
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import Home from './CRUD/Home'
import Users from './CRUD/Users'
import './App.css'
import CreateUser from './CRUD/CreateUser'
import UserDetails from './CRUD/UserDetails'
import EditUser from './CRUD/EditUser'

const App9 = () => {
  return (
    <>
    <BrowserRouter>
    <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/users'>Users</Link></li>
        </ul>
    </nav>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/create' element={<CreateUser/>} />
        <Route path='/users/:id' element={<UserDetails/>} />
        <Route path='/editusers/:id' element={<EditUser/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App9