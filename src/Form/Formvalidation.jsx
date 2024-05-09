import React, { useState } from 'react'

const Formvalidation = () => {
    

    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [cnfrmPswd, setcnfrmPswd] = useState("")

    const [useranameErr, setuseranameErr] = useState("")
    const [emailErr, setemailErr] = useState("")
    const [passErr, setpassErr] = useState("")
    const [cpswdErr, setcpswdErr] = useState("")

    const isValid =
    username !== "" &&
    email !== "" &&
    password !== "" &&
    cnfrmPswd === password;

    // f && T && T && T  = false 

    // onclick= {(e)=>setuseraname(e.target.value)}

    const handleUserName = (e) =>{
       const val =  e.target.value
       setusername(val)
       // conditional rendr
       setuseranameErr(val !== "" ? "" : "usernameReq")
    }

    const handleEmail = (e) =>{
        const val =  e.target.value
       setemail(val)
       setemailErr(val !== "" ? "" : "emailReq")
    // if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(val)) {
    //     setemailErr('Invalid email address');
    //   } 
    //   else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(val)) {
    //     setemailErr('Invalid email address');
    //   }
    }

    const handlePswd = (e) =>{
        const val =  e.target.value
       setpassword(val)
       setpassErr(val !== "" ? "" : "passwordReq")
    }

    const handleCNPswd = (e) =>{
        const val =  e.target.value
       setcnfrmPswd(val)
       setcpswdErr(val === password  ? "" : "passWd doesnot match")
    }


  return (
    <>
    <form>

        <input type='text' onChange={handleUserName} placeholder='enter name' /> <br/>
        <p>{useranameErr}</p>

        <input type='email' pattern='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$' onChange={handleEmail}  placeholder='enter email' /> <br/>
        <p>{emailErr}</p>

        <input type='password' onChange={handlePswd} placeholder='enter password' /> <br/>
        <p>{passErr}</p>
        
        <input type='password' onChange={handleCNPswd} placeholder='cnfrm pswd' /> <br/>
        <p>{cpswdErr}</p>

        <button type='submit'  disabled={!isValid} >SIGN IN</button>
    </form>
    </>
  )
}

export default Formvalidation



