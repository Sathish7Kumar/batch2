import React from 'react'

const GuestGreeting = (props) => {
    const handleLogin = () =>{
        props.isLogin(true)
    }
  return (
    <>
    <h1>Welcome Guest user</h1>
    <p>Please Login ... </p>
    <form onSubmit={handleLogin}>
        <input required placeholder='enter mail' type='email' />
        <input required placeholder='enter password' type='password' />
        <button>Login</button>
    </form>
    </>
  )
}

export default GuestGreeting