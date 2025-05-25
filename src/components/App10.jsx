import React from "react";
import { useState } from "react";

export default function App10() {
  const [product] = useState([
    { name: "Product 1", price: 30 },
    { name: "Product 2", price: 60 },
  ]);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const found = cart.find((p) => p.name === item.name);
    if (found) {
      setCart(
        cart.map((p) =>
          p.name === item.name ? { ...p, qty: p.qty + 1 } : p
        )
      );
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const increase = (name) => {
    setCart(
      cart.map((item) =>
        item.name === name ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decrease = (name) => {
    const updated = cart
      .map((item) =>
        item.name === name ? { ...item, qty: item.qty - 1 } : item
      )
      .filter((item) => item.qty > 0);
    setCart(updated);
  };

  return (
    <div>
      <h1>App10</h1>
      <h2>Assignment</h2>
      <h3>Products</h3>
      <ol>
        {product.map((item) => (
          <li key={item.name}>
            {item.name} - ${item.price}{" "}
            <button onClick={() => addToCart(item)}>Add</button>
          </li>
        ))}
      </ol>
      <hr />
      <h3>My Cart</h3>
      <ol>
        {cart.map((item) => (
          <li key={item.name}>
            {item.name} - ${item.price} -{" "}
            <button onClick={() => decrease(item.name)}>-</button>{" "}
            {item.qty}{" "}
            <button onClick={() => increase(item.name)}>+</button> - $
            {item.price * item.qty}
          </li>
        ))}
      </ol>
    </div>
  );
}
