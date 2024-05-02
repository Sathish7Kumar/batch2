import React, { useEffect, useState } from 'react'
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom'
import FoodHome from './food/FoodHome'
import FoodProduct from './food/FoodProduct'
import FoodCart from './food/FoodCart'
import FoodData from './food/FoodData'
import Pizza from './food/Pizza'
import Burger from './food/Burger'


const App3 = () => {

    const [products, setproducts] = useState([])

    const [cart, setcart] = useState([])

    const [pizza, setpizza] = useState([])

    const [burger, setburger] = useState([])

    const addCart = (item) =>{
        setcart((prevValue)=>[...prevValue,item])
    }

    const removeCart = (index) =>{
       setcart((prevValue)=> prevValue.filter((e,i) => i!==index) ) 
    }

    const calcTotal = () =>{
        let total = 0
        cart.forEach((food) => total += parseInt(food.price) )
        return total.toFixed(2)
    }

    const clearCart = () =>{
        setcart([])
    }

    useEffect(()=>{
        setproducts(FoodData)
    },[])

    useEffect(()=>{
        setpizza(FoodData[0])
    },[])

    useEffect(()=>{
        setburger(FoodData[1])
    },[])
    
  return (
    <>
    <BrowserRouter>
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/food">Food</Link></li>
            <li><Link to="/pizza">Pizza</Link></li>
            <li><Link to="/burger">Burger</Link></li>
            <li><Link to="/cart">Cart : {cart.length}</Link></li>
        </ul>
    </nav>
    <Routes>
        <Route path='/' element={<FoodHome pizza={pizza} burger={burger}/>} />
        <Route path='/pizza' element={<Pizza pizza={pizza} />} />
        <Route path='/burger' element={<Burger burger={burger} />} />
        <Route path='/food' element={<FoodProduct products={products} addCart={addCart} />} />
        <Route path='/cart' element={<FoodCart cart={cart} setcart={setcart} removeCart={removeCart} clearCart={clearCart} calcTotal={calcTotal}  />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App3