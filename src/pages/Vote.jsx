import React, { useState } from 'react'

const Vote = () => {
    const [age, setage] = useState("")
    const [message, setmessage] = useState("")

    const handleAge = () => {
        if(age>=18){
            setmessage("You are eligible to Vote")
        }
        else{
            setmessage("You are not eligible to Vote")  
        }
    }
    
  return (
    <>
    <h1>Vote Age Calculator</h1>
    <input  onChange={(e)=> setage(e.target.value)}  type='text' />
    <button onClick={handleAge}>Check</button>
    <div>
        <p>{message}</p>
    </div>
    </>
  )
}

export default Vote