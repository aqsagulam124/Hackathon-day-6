"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

interface Product {
  _id: string;
  name: string;
  imagePath: string;
  price: number;
}

interface CartItem extends Product {
  quantity: number;
}

function Page() {
  const params = useParams<{ slug: string }>();
  const [data, setData] = useState<Product | undefined>(undefined);

  const addToCart = () => {
    if (!data) return;

    const cartItem: CartItem = {
      ...data,
      quantity: 1,
    };

    const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingItemIndex = cart.findIndex(item => item._id === cartItem._id);

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
      const dummyProduct: Product = {
        _id: params.slug,
        name: "Sample Product",
        imagePath: "/sample-image.jpg",
        price: 50,
      };
      setData(dummyProduct);
    };

    fetchData();
  }, [params.slug]);

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