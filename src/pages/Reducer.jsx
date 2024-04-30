import React, { useContext, useEffect, useReducer } from 'react'
import { BalanceContext } from '../App'

const transaction = (state,action) =>{
    switch(action.type){
        case "Deposit" : return state + action.payload
        case "Withdraw" : return state - action.payload
        default :
        return state
    }}

const Reducer = () => {

    const Initialbalance = useContext(BalanceContext)

    const [state,dispatch] = useReducer(transaction,Initialbalance)

    useEffect(()=>{
        console.log(state);
    })

    const handleDeposit = (amount) => {
        dispatch({type:"Deposit", payload:amount})
    }

    const handleWithdraw = (amount) => {
        dispatch({type:"Withdraw", payload:amount})
    }
   
  return (
    <>
    <h1>Balance : {state}</h1>
    <button onClick={()=>handleDeposit(500)}>Deposit</button>
    <button onClick={()=>handleWithdraw(500)}>Withdraw</button>
    </>
  )
}

export default Reducer

// import React, { useState } from 'react'
// const Reducer = () => {
//     const [balance, setbalance] = useState(1000)
//   return (
//     <div>
//         <h1>Balance : {balance}</h1>
//         <button onClick={()=>setbalance(balance+500)}>Deposit</button>
//         <button onClick={()=>setbalance(balance-500)}>Withdraw</button>
//     </div>
//   )
// }
// export default Reducer