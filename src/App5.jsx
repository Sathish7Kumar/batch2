import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeRoute from './route2/HomeRoute';
import ProductsRoute from './route2/ProductsRoute';
import './App.css'
import ProductsDetails from './route2/ProductsDetails';
const App5 = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<HomeRoute/>} />
        <Route path='/products' element={<ProductsRoute/>} />
        <Route path='/products/:id' element={<ProductsDetails/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App5