import React, { useEffect, useState } from "react";
import axios from 'axios'

const Fetch = () => {
  const [products, setproducts] = useState([]);

//   useEffect(()=>{
//       fetch('https://fakestoreapi.com/products')
//     .then(resp => resp.json())
//     .then(data => setproducts(data))
//     .catch(err =>console.log(err))
//   },[])

  // async function getResponse(){
  //   try {
  //    const resp =  await fetch("https://fakestoreapi.com/products")
  //    const data = resp.json()
  //    return data
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // async function getData(){
  //   try {
  //     const data  = await getResponse()
  //     setproducts(data)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // useEffect(()=>{
  //     getData()
  // },[])

  const getProducts = async () =>{
    try {
        const response = await axios.get('https://663b1ebbfee6744a6ea05dca.mockapi.io/todo/v1/todoData')
        setproducts(response.data);
    } catch (error) {
        console.log(error);
    }
  }
  useEffect(()=>{
    getProducts()
  },[])

//   console.log(products);

  return (
    <>
      <h1>Fetch</h1>
      {products.map((e, i) => {
        return (
          <div key={i}>
            <h1>{e.title}</h1>
            <img src={e.image} height={100} width={100} />
            <h3>Description : {e.decs}</h3>
            <h2>Price : {e.price}</h2>
            <button>Add to Cart</button>
          </div>
        );
      })}
    </>
  );
};

export default Fetch;
