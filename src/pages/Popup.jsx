import React, { useState } from 'react'
import Login from '../Form/Login'

const Popup = () => {

    const [showPopup, setshowPopup] = useState(false)

    const handleLogin = () =>{
        setshowPopup(!showPopup) // f  ,T f
    }

  return (
    <>
    <div>
        { showPopup ?
        <>
        <div>
            <button onClick={handleLogin}>Close</button>
            <Login/>
        </div>
        </> 
        : 
        <>
        <div>
            <button className='bg-danger' onClick={handleLogin}>Open</button>
        </div>
        </>
        }
    </div>
    </>
  )
}

export default Popup