import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext()

const App3 = () => {
    const [name, setname] = useState("Ms Dhoni")
  return (
    <>
    <UserContext.Provider value={name}>
        <Home1 />
    </UserContext.Provider>
    </>
  )
}

export default App3

function Home1(){
    return(
        <>
        <h1>Home 1 Component</h1>
        <Home2/>
        </>
    )
}

function Home2(){
    return(
        <>
        <h1>Home 2 Component</h1>
        <Home3/>
        </>
    )
}

function Home3(){
    const name = useContext(UserContext)
    return(
        <>
        <h1>Home 3 Component</h1>
        <h2>My name is {name}</h2>
        </>
    )
}
