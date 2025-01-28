"use client";

import { useState, useEffect } from "react";

function Page({ params }: { params: { id: string } }) {
  const [data, setData] = useState<any>(null);

  const addToCart = () => {
    if (!data) return;

    const cartItem = {
      id: data._id,
      name: data.name,
      imagePath: data.imagePath,
      price: data.price,
      quantity: 1,
    };

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingItemIndex = cart.findIndex((item: any) => item.id === cartItem.id);

    if (existingItemIndex >= 0) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // Dispatch a custom event
    const event = new Event("cartUpdated");
    window.dispatchEvent(event);

    alert("Item added to cart!");
  };

  useEffect(() => {
    // Fetch product data based on ID
    const fetchData = async () => {
      const dummyProduct = {
        _id: params.id,
        name: "Sample Product",
        imagePath: "/sample-image.jpg",
        price: 50,
      };
      setData(dummyProduct);
    };

    fetchData();
  }, [params.id]);

  return (
    <main>
      {data ? (
        <div>
          <h1>{data.name}</h1>
          <p>Price: ${data.price}</p>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}

export default Page;
