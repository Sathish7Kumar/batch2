import React, { useContext, useEffect, useState } from "react";
import { ApiContext } from "../App7";
import './Cart.css'
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const context = useContext(ApiContext);
  // context = {products,setproducts,cart,setcart,cartValue,setcartValue}

  const [total, settotal] = useState(0);

  const nav = useNavigate()

  useEffect(() => {
    const newTotal = context.cart.reduce(
      (sum, product) => sum + product.price,
      0
    );
    settotal(newTotal.toFixed(2));
  }, [context.cart]);

  const handleClear = () => {
    context.setcart([]);
    context.setcartValue(0);
  };

  const handleRemove = (item) => {
    const index = context.cart.findIndex((e) => e == item);

    if (index !== -1) {
      const updatedCart = [...context.cart];
      updatedCart.splice(index, 1);
      context.setcart(updatedCart);
      context.setcartValue(updatedCart.length);
    }
  };

  const handlePlaceOrder = ()=>{
    alert("your order is placed")
    context.setcart([]);
    context.setcartValue(0);
    nav('/')
  }

  return (
    <>
      <h2>Cart Page</h2>
      {context.cart.length > 0 ? (
        <>
          <h1>Your have ordered : </h1>
          <button onClick={handleClear}>Clear Cart</button>
          {context.cart.map((item, index) => {
            return (
              <div className="cart-page" key={index}>
                <h2>{item.title}</h2>
                <img src={item.image} height={100} width={100} alt="" />
                <h2>{item.price}</h2>
                <button onClick={() => handleRemove(item)}>
                  Remove from Cart
                </button>
              </div>
            );
          })}
          <h1>Total Price : {total}</h1>
          <button onClick={handlePlaceOrder}>Place Order</button>
        </>
      ) : (
        <>
          <h1>Your Cart is Empty</h1>
        </>
      )}
    </>
  );
};

export default Cart;
