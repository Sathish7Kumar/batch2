import React, { useState } from 'react'
import {BrowserRouter,Routes,Route, Link, useNavigate} from 'react-router-dom'


const users = [
    {username:"user1",password:2510},
    {username:"user2",password:1509},
    {username:"user3",password:2515},
]

const App11 = () => {
    
    const [islogin, setislogin] = useState(false)

  return (
    <>
    <BrowserRouter>
    {/* <Routes>
        <Route path='/login' element={<LoginPage islogin={islogin} setislogin={setislogin} />} />
        <Route path='/' element={<HomePage islogin={islogin} setislogin={setislogin}/>} />
    </Routes> */}
    {islogin
     ?
        <>
        <Routes>
        <Route path='/' element={<HomePage islogin={islogin} setislogin={setislogin}/>} />
        </Routes>
        </>
    : 
        <>
        <LoginPage islogin={islogin} setislogin={setislogin} />
        </>
         }
    </BrowserRouter>
    </>
  )
}

export default App11

function LoginPage({islogin,setislogin}){
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [error, seterror] = useState("")

    const nav = useNavigate()

    const handleLogin = () =>{
        const user = users.find((e)=>{
            return e.username == username && e.password ==  password
        })
        if(user){
            setislogin(true)
            nav('/')
        }
        else{
            seterror("invalid username or password")
        }
    }

    return (
        <>
        <h1>Login Page</h1>
        <input type="text" value={username} onChange={(e)=>setusername(e.target.value)}  required placeholder='enter username ' />
        <br /><br />
        <input type="text" value={password} onChange={(e)=>setpassword(e.target.value)} required placeholder='enter password ' />
        <br /><br />
        <p>{error}</p>
        <button onClick={handleLogin}>Login</button>
        </>
    )
}

function HomePage ({islogin,setislogin}){
    const nav = useNavigate()
    const handleLogout = () =>{
            setislogin(false)
            nav('/login')
    }
    return(
        <>
        <h1>Welcome User</h1>
        <button onClick={handleLogout}>Logout</button>
        </>
    )
}