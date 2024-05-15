import React, { useState } from 'react'
import useCounter from './useCustom'

const CustomCounter = () => {

    const {count,increment,decrement,reset}=useCounter(0)
    
  return (
    <>
    <h1>Count Value : {count} </h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
    </>
  )
}

export default CustomCounter

// import React, { useState } from 'react'
// const [count, setcount] = useState(0)

// const CustomCounter = () => {
//   return (
//     <div>
//         <h1>Count : {count}</h1>
//         <button onClick={()=>setcount(count+1)}>Increment</button>
//         <button onClick={()=>setcount(count+1)}>Decrement</button>
//         <button onClick={()=>setcount(0)}>Reset</button>
//     </div>
//   )
// }

// export default CustomCounter