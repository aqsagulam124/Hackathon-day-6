"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { useParams } from "next/navigation";
import StarRatings from "react-star-ratings";

interface Product {
  _id: string;
  name: string;
  imagePath: string;
  price: number;
  description: string;
  discountPercentage?: number;
  isFeaturedProduct?: boolean;
  stockLevel?: number;
  category?: string;
}

function Page() {
  const [data, setData] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { id } = useParams<{ id: string }>(); // Strongly typed params

  const querySanity = `*[_type == "Products"]{
    _id,
    name,
    "imagePath": imagePath.asset->url,
    price,
    description,
    discountPercentage,
    isFeaturedProduct,
    stockLevel,
    category,
  }`;

  useEffect(() => {
    if (id) {
      const fetchProductData = async () => {
        try {
          const products: Product[] = await client.fetch(querySanity);
          const product = products.find((item) => item._id === id) || null;
          setData(product);
          setSelectedImage(product?.imagePath || "");
        } catch (error) {
          console.error("Error fetching product data:", error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchProductData();
    }
  }, [id]);

  const addToCart = () => {
    if (!data) return;

    const existingCart: Product[] = JSON.parse(localStorage.getItem("item") || "[]");
    const isProductInCart = existingCart.some((item) => item._id === data._id);

    const updatedCart = isProductInCart
      ? existingCart.map((item) => (item._id === data._id ? { ...item } : item))
      : [...existingCart, data];

    localStorage.setItem("item", JSON.stringify(updatedCart));
    alert("Cart updated successfully");
  };

  const buyNow = () => {
    if (!data) return;

    const cartItem = {
      id: data._id,
      name: data.name,
      imagePath: data.imagePath,
      price: data.price,
      quantity: 1,
    };

    const cart: typeof cartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItemIndex = cart.findIndex((item) => item.id === cartItem.id);

    if (existingItemIndex >= 0) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Redirecting to checkout...");
    window.location.href = "/checkout";
  };

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>Product not found!</div>;

  return (
    <main>
      <section className="my-20">
        <div className="max-w-[84%] mx-auto">
          <div className="bg-white w-full md:flex-row flex-col py-4 flex justify-center items-center gap-8">
            <div className="flex flex-row gap-4 md:gap-9 items-center md:w-[50%]">
              <div>
                {data.imagePath && (
                  <>
                    <Image className="p-3 shadow-lg" src={data.imagePath} width={100} height={100} alt="image" />
                    <Image className="p-3 shadow-lg" src={data.imagePath} width={100} height={100} alt="image" />
                    <Image className="p-3 shadow-lg" src={data.imagePath} width={100} height={100} alt="image" />
                  </>
                )}
              </div>
              <div className="items-center shadow-xl">
                <Image
                  onClick={() => setSelectedImage(data.imagePath || "")}
                  src={selectedImage || "/placeholder-image.jpg"}
                  width={300}
                  height={300}
                  alt="image"
                  className="w-[300px] p-3 object-cover"
                />
              </div>
            </div>
            <div className="md:w-[45%] flex items-start gap-4 flex-col">
              <h3 className="text-3xl font-bold">{data.name}</h3>
              <div className="inline-flex gap-x-3 items-center">
                <StarRatings starRatedColor="orange" numberOfStars={5} rating={4} starDimension="20px" starSpacing="2px" name="rating" />
                <span>(22)</span>
              </div>
              <div className="inline-flex gap-x-5">
                <span className="text-sm text-[#151875] font-bold">$26.00</span>
                <span className="text-sm text-[#FB2E86]" style={{ textDecoration: "line-through" }}>
                  {data.price}
                </span>
              </div>
              <span className="text-sm">Color</span>
              <p className="text-sm text-[#A9ACC6] leading-[20px]">{data.description}</p>
              <div className="flex gap-4">
                <button className="px-4 py-1 text-sm hover:bg-opacity-70 cursor-pointer bg-[#FB2E86] rounded-[6px] text-[#ffffff] font-bold" onClick={addToCart}>
                  Add To Cart
                </button>
                <button className="px-4 py-1 text-sm hover:bg-opacity-70 cursor-pointer bg-green-500 rounded-[6px] text-[#ffffff] font-bold" onClick={buyNow}>
                  Buy Now
                </button>
              </div>
              <span className="text-sm text-[#151875] font-bold">Categories: {data.category || "N/A"}</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
