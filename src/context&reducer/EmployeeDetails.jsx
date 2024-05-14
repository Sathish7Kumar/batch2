import React, { useState } from 'react'
import { useEmployeeContext } from './EmployeeContext'

const EmployeeDetails = () => {
    const [name, setname] = useState("")
    const [role, setrole] = useState("")

    const {state,dispatch}=useEmployeeContext()
    console.log(state);

    const handleAdd = () => {
        if(!name || !role ){
            return null
        }
        const newEmployee = {
            id : Math.round(Math.random() * 100),
            name : name,
            role: role
        }
        dispatch({type:"ADD_EMP",payload:newEmployee})
        setname("")
        setrole("")
    }

    const handleDelete = (id) => {
        dispatch({type:"DEL_EMP",payload:id})
    }

  return (
    <>
    <h1>Employee Details</h1>
    <div>
        <input type='text' value={name} onChange={(e)=>setname(e.target.value)} required placeholder='Enter Employee Name' /> <br /><br />
        <input type='text' value={role} onChange={(e)=>setrole(e.target.value)} required  placeholder='Enter Employee Role' /> <br /> <br />
        <button onClick={handleAdd}>Add Employee</button>
        <br /> <hr />
        <div>
            <ul>
                {state.employee.map((empDetails,index)=>{
                    return(
                        <li key={index}>
                            Emp ID : {empDetails.id} , 
                            Emp Name : {empDetails.name}, Role : {empDetails.role} 
                            <button onClick={()=>handleDelete(empDetails.id)}>Delete</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
    </>
  )
}

export default EmployeeDetails