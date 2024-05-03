import React from "react";

const Product = React.memo(({proname,addCart}) => {
    console.log("re-render");
  return (
    <>
    <h1>{proname}</h1>
    <button onClick={addCart}>Add Cart</button>
    </>
  )
})

export default Product