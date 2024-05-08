import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './contextApi/Home'
import Products from './contextApi/Products'
import Navbar from './contextApi/Navbar'
import Cart from './contextApi/Cart'
import  './App.css'
const url = "https://fakestoreapi.com/products"


export const ApiContext = createContext()

const App7 = () => {

 const [products,setproducts] =  useState([])
 const [cart,setcart] =  useState([])
 const [cartValue,setcartValue] =  useState(cart.length)

 const getProducts = async () =>{
  try {
      const response = await axios.get(url)
      setproducts(response.data);
  } catch (error) {
      console.log(error);
  }
}
useEffect(()=>{
  getProducts()
},[])


  return (
    <ApiContext.Provider value={{products,setproducts,cart,setcart,cartValue,setcartValue}}>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/cart' element={<Cart/>} />
    </Routes>
    </BrowserRouter>
    </ApiContext.Provider>
  )
}

export default App7