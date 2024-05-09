import React from 'react'
import { useState } from 'react'

const Login = () => {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const [loggedIn, setloggedIn] = useState(false)

    const handleLogin = () =>{
        if (username === "admin" && password === "admin"){
            setloggedIn(true)
        }
    }

    const handleLogout = () =>{
        setloggedIn(false)
    }

  return (
    <>
    <div>
        { loggedIn ?
        <>
        <div>
            <h2>Welcome {username}
            <br /><br /> 
            <button onClick={handleLogout} >Logout</button> <br />
            </h2>
        </div>
        </> 
        : 
        <>
        <div>
            <h2>USER LOGIN</h2>
            <label>Enter Username :</label>
            <input type='text' onChange={(e)=>setusername(e.target.value)} />
            <br /> <br />
            <label>Enter Password :</label>
            <input type='password' onChange={(e)=>setpassword(e.target.value)} />
            <br /> <br />
            <button className='bg-danger' onClick={handleLogin}>Login</button>
        </div>
        </>
        }
    </div>
    </>
  )
}

export default Login