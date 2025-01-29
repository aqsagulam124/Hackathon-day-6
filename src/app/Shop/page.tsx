import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';

export default async function Shop() {
    // Fetch query for Sanity
    const query = `*[_type == "Products"]{
    _id,
    name,
    "imagePath": imagePath.asset->url,
    price,
    description,
    discountPercentage,
    isFeaturedProduct,
    stockLevel,
    category
  }`;

    let product;
    try {
        product = await client.fetch(query);
    } catch (error) {
        console.error('Error fetching products:', error);
        return <h1>Error loading products. Please try again later.</h1>;
    }

    if (!product || product.length === 0) {
        return <h1>No products found!</h1>;
    }

    return (
        <section className="my-20">
            <div className="max-w-[84%] mx-auto">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mt-12">
                    {product.map((item: {
                        _id: string;
                        name: string;
                        imagePath: string;
                        price: number;
                        description: string;
                        discountPercentage?: number;
                        isFeaturedProduct?: boolean;
                        stockLevel?: number;
                        category?: string;
                    }) => (
                        <Link key={item._id} href={`/Shop/${item._id}`} passHref>
                            <div
                                className="col-span-1 hover:opacity-75 hover:blur-0 flex items-center flex-col gap-2"
                                key={item._id}
                            >
                                {/* Product Image */}
                                <div className="bg-[#F6F7FB] w-full lg:w-[220px] h-[250px] py-4 flex items-center justify-center">
                                    <Image
                                        className="hover:scale-110 transition-all duration-300 overflow-hidden object-cover"
                                        src={item.imagePath}
                                        width={150}
                                        height={150}
                                        alt={item.name}
                                    />
                                </div>

                                {/* Product Name */}
                                <h3 className="text-center text-[#151875] font-[700] text-[18px]">
                                    {item.name}
                                </h3>

                                {/* Price Display */}
                                <div className="flex gap-x-3">
                                    <span className="text-sm text-[#151875]">${item.price}</span>
                                    {item.discountPercentage && (
                                        <span
                                            style={{ textDecoration: 'line-through' }}
                                            className="text-sm text-[#FB2E86]"
                                        >
                                            ${(item.price - (item.price * item.discountPercentage) / 100).toFixed(2)}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
