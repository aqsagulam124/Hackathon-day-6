// components/Cart.tsx
import React from "react";

export const Cart = () => {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");

  return (
    <div>
      <h3>Your Cart</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item: {
            id: string;
            name: string;
            quantity: number;
            price: number;
          }) => (
            <li key={item.id}>
              {item.name} - {item.quantity} x ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
