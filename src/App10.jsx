import React from 'react'
import EmployeeDetails from './context&reducer/EmployeeDetails'
import { EmployeeProvider } from './context&reducer/EmployeeContext'


const App10 = () => {
  return (
    <EmployeeProvider>

    <EmployeeDetails/>
    
    </EmployeeProvider>
  )
}

export default App10