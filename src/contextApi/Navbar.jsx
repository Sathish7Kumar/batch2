import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ApiContext } from '../App7'

const Navbar = () => {
    const context = useContext(ApiContext)
    // context = {products,setproducts,cart,setcart,cartValue,setcartValue}
  return (
    <>
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/cart">Cart 🛒 :  {context.cartValue}</Link></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar