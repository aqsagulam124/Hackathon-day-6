"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface P {
  _id: string;
  name: string;
  imagePath: string;
  price: number;
  description: string;
  discountPercentage?: number;
  isFeaturedProduct?: boolean;
  stockLevel?: number;
  category?: string;
  quantity: number;
}


function CartPage() {
  const [cart, setCart] = useState<P[]>([]);

  // Function to load cart from localStorage
  const loadCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("item") || "[]");
    setCart(storedCart);
  };

  useEffect(() => {
    loadCart();


    const handleCartUpdate = () => {
      loadCart();
    };

    window.addEventListener("cartUpdated", handleCartUpdate);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
    };
  }, []);

  console.log("Rendered Cart:", cart);



  return (
    <main className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center text-center"
            >
              <Image
                src={item.imagePath}
                alt={item.name}
                width={200}
                height={200}
                className="rounded-lg"
              />
              <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
              <p className="text-gray-500">Price: ${item.price}</p>
              <p className="text-gray-500">Quantity: {item.quantity}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default CartPage;
