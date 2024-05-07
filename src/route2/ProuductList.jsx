import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProuductList = ({name,image,id}) => {

    const nav = useNavigate()

    const handleClick = () =>{
        nav('/products/'+id)
        // nav(`/products/${id}`)
    }
  return (
    <>
    <div onClick={handleClick} className='pro-item'>
        <h1>{name}</h1>
        <img src={image} height={100} width={100} />
    </div>
    </>
  )
}

export default ProuductList