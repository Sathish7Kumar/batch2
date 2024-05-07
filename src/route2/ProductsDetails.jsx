import React from 'react'
import { useParams } from 'react-router-dom'
import data from './data'


const ProductsDetails = () => {

    const {id}= useParams()

    const uniqProduct = data.find(e => e._id == id)

    // console.log(uniqProduct);

  return (
    <>
    <h1>ProductsDetails</h1>
    <h1>{uniqProduct.name}</h1>
    <img src={uniqProduct.image} height={100} width={100} />
    <h3>{uniqProduct.desc}</h3>
    <h3>{uniqProduct.brand}</h3>
    <h2>{uniqProduct.price}</h2>
    <button>Add to Cart</button>
    </>
  )
}

export default ProductsDetails