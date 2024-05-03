// import React, { useMemo, useState } from 'react'

// const Memo = () => {

//     const [count, setcount] = useState(0)

//     const [arr, setarr] = useState([10,25,15])
  
//     function max(){
//         console.log("Maximum func Calling");
//         return Math.max(...arr)
//     }

//     const memoMax = useMemo(()=>{
//       return max()
//     },[arr])

//   //  const memoMax =  useMemo(()=> max(),[arr])

//    console.log("re-render");

//   return (
//     <>
//     <h1>Count : {count}</h1>
//     <button onClick={()=>setcount(count+1)}>ADD</button>
//     <hr/>
//     <h1>{JSON.stringify(arr)}</h1>
//     {/* <h1>Maximum Number in Array : {max()}</h1> */}
//     <button onClick={()=>setarr([...arr,Math.round(Math.random()*100)])}>Add Array</button>
//     <h1>After Memo Max Val : {memoMax}</h1>
//     </>
//   )
// }

// export default Memo

import React, { useMemo, useState } from 'react'

const Memo = () => {

    const [render, setrender] = useState()
    const [modify, setmodify] = useState()


    function getNum(){

        let random = ""
        console.log("function Calling");
        for(let i=0;i<=1000000000;i++){
            if(i==99999999){
                random  = Math.round(Math.random()*1000)
            }
        }
        return random
    }

    const mem2 = useMemo(()=> getNum(),[modify])
    
  return (
    <>
    <h1>Val : {render}</h1>
    <button onClick={()=>setrender(Math.round(Math.random()*1000))}>Render</button>
    <h1>Val 2 : {mem2}</h1>
    <button onClick={()=>setmodify(Math.round(Math.random()*1000))}>Modify</button>
    </>
  )
}

export default Memo