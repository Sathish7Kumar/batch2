import React from 'react'
import data from './data'
import ProuductList from './ProuductList'


const ProductsRoute = () => {
  return (
    <>
    <h1>All products</h1>
    {data.map((e,i)=>{
      return(
        <div key={i}>
        <ProuductList name={e.name} image={e.image} id={e._id} />
        </div>
      )
    })}
    </>
  )
}

export default ProductsRoute