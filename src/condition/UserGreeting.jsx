import React from 'react'

const UserGreeting = (props) => {
    const handleLogout = () =>{
        props.isLogin(false)
    }
  return (
    <>
    <h1>Welcome back! User</h1>
    <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default UserGreeting