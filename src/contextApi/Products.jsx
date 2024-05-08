import React, { useContext, useEffect, useState } from "react";
import { ApiContext } from "../App7";

const Products = () => {
  const context = useContext(ApiContext);
  // context = {products,setproducts,cart,setcart,cartValue,setcartValue}

  const [data, setdata] = useState([]);
  const [input, setinput] = useState("");

  useEffect(() => {
    setdata(context.products);
  });

  const handleAdd = (item) => {
    context.cart.unshift(item);
    context.setcartValue(context.cart.length);
  };

  const filteredProducts = data.filter((item) => {
    return item.title.toLowerCase().includes(input.toLowerCase());
  });

  // console.log(filteredProducts);

  return (
    <>
      <h1>Products Page</h1>
      <h2>Search Products :</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setinput(e.target.value)}
        placeholder="search ...."
      />
      <br />
      <br />
      {filteredProducts.map((item, index) => {
        return (
          <div key={index}>
            <h2>{item.title}</h2>
            <img src={item.image} height={100} width={100} alt="" />
            <h3>Description : {item.description}</h3>
            <h3>Rating : {item.rating.rate.toFixed(2)}</h3>
            <h3>Available Count : {item.rating.count}</h3>
            <h2>Price : ${item.price.toFixed(2)}</h2>
            <button onClick={() => handleAdd(item)}>Add to Cart</button>
          </div>
        );
      })}
    </>
  );
};

export default Products;
