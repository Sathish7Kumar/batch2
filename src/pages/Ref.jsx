// import React, { useRef, useState } from 'react'

// //  1 . no re-render but stores the value 
// //  when it other state rerenders the  value stored
// //  in the refcounter is display

// const Ref = () => {
  
//     const [count, setcount] = useState(0)
    

//     const counterRef = useRef(0)

//     // counterRef = { current: 0 }


//     const handleCount = () =>{
//         setcount(count+1)
//     }

//     const handleRefCount = () =>{
//        counterRef.current++
//     }

//     console.log("re-rendering");

//   return (
//     <>
//     <h1>Counter = {count}</h1>
//     <button onClick={handleCount}>Counter</button>
//     <br/>

//     <h1>Ref Counter = {counterRef.current}</h1>
//     <button onClick={handleRefCount}>Ref Counter </button>
//     </>
//   )
// }

// export default Ref

// import React, { useEffect, useRef } from 'react'

// //  2 direct dom access

// const Ref = () => {

//     const textRef = useRef()
    
//     useEffect(()=>{
//        textRef.current.focus() 
//     },[])

//   return (
//     <>
//     <div>
//         <input style={{marginLeft: "100px"}} ref={textRef}  type='text' />
//     </div>
//     </>
//   )
// }

// export default Ref

import React, { useEffect, useRef, useState } from 'react'
// // 3 returns prev state

const Ref = () => {
    const [inputVal, setinputVal] = useState("")
    const prev = useRef("")
    useEffect(()=>{
        prev.current = inputVal
    },[inputVal])
  return ( 
    <div>
    <input type='text' onChange={(e)=>{setinputVal(e.target.value)}} />
    <h1>Current Value : {inputVal}</h1>
    <h1>Previuos Value : {prev.current}</h1>
    </div>
  )
}

export default Ref