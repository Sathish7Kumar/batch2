import React, { useCallback, useState } from 'react'
import Product from './Product'

const Callback = () => {

    const [count, setcount] = useState(0)

    const [product, setproduct] = useState(["Mobile","Grocery","books"])
    
    const [cart, setcart] = useState(0)

    const addCart = useCallback(()=>{
        setcart(cart+1)
    },[cart])
    
  return (
    <>
    
    <h1>Count : {count}</h1>
    <button onClick={()=>setcount(count+1)}>Add</button>

    <h1>CartValue : {cart}</h1>

    <div>
        {product.map((e,i)=>{
            return (
                <div key={i}>
                    <Product addCart={addCart} proname={e} />
                </div>
            )
        })}
    </div>

    </>
  )
}

export default Callback