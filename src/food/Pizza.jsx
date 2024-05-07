import React from "react";

const Pizza = ({ pizza, addCart }) => {
  return (
    <>
    <h1>{pizza.subItemsData.name}'s</h1>
        {pizza.subItemsData.subItems.map((e, i) => {
          return (
            <div key={i}>
              <h1>{e.name}</h1>
              <img src={e.image} height={150} width={150} />
              <h3>{e.description}</h3>
              <h4>Price : Rs {e.price}.00</h4>
              <button onClick={() => addCart(e)}>Add to Cart</button>
            </div>
          );
        })}
    </>
  );
};

export default Pizza;
