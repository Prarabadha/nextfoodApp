"use client";

import React from "react";
import Image from "next/image";
import { featuredProducts } from "@/data";
import { useCart } from "@/context/CartContext";
// import { toast } from "react-toastify";
import Link from "next/link";

const Offer = () => {
  const product = featuredProducts[0];
  const producttwo = featuredProducts[1];
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(product);
    // toast.success("Added offer to cart!");
    alert("Added offer to cart!");
  };

  const handleAddTwo = () => {
    addItem(producttwo);
    // toast.success("Added offer to cart!");
    alert("Added offer to cart!");
  };

  return (
    <section className=" bg-linear-to-r from-red-50 to-white py-12">
      <div className="flex items-center justify-center mb-12">
        <h3 className="text-3xl font-extrabold text-red-600">
          Limited Time Offer
        </h3>
      </div>
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 bg-white shadow-lg rounded-lg p-6 flex items-center flex-col">
          <div className="relative w-44 h-44 md:w-56 md:h-56 mx-auto">
            {product.img && (
              <Image
                src={product.img}
                alt={product.title}
                fill
                className="object-contain"
              />
            )}
          </div>
          <h3 className="mt-4 font-bold text-center">{product.title}</h3>
        </div>

        <div className="md:w-1/2 bg-white shadow-lg rounded-lg p-6 flex items-center flex-col">
          <div className="relative w-44 h-44 md:w-56 md:h-56 mx-auto">
            {producttwo.img && (
              <Image
                src={producttwo.img}
                alt={producttwo.title}
                fill
                className="object-contain"
              />
            )}
          </div>
          <h3 className="mt-4 font-bold text-center">{producttwo.title}</h3>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mt-2">
            {product.title}
          </h2>
          <p className="mt-4 text-gray-600">{product.desc}</p>
          <div className="mt-6 flex items-center gap-4">
            <span className="text-2xl font-bold">Rs {product.price}</span>
            <span className="px-2 py-1 bg-red-100 text-red-600 rounded">
              FLAT 20% OFF
            </span>
          </div>

          <div className="mt-6 flex gap-3">
            <button
              className="bg-red-600 text-white px-5 py-2 rounded shadow hover:bg-red-700"
              onClick={handleAdd}
            >
              Add Offer to Cart
            </button>
            <Link
              className="inline-block px-5 py-2 border rounded text-red-600 border-red-200 hover:bg-red-50"
              href="/productlist"
            >
              See Menu
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold mt-2">
            {producttwo.title}
          </h2>
          <p className="mt-4 text-gray-600">{producttwo.desc}</p>
          <div className="mt-6 flex items-center gap-4">
            <span className="text-2xl font-bold">Rs {producttwo.price}</span>
            <span className="px-2 py-1 bg-red-100 text-red-600 rounded">
              FLAT 30% OFF
            </span>
          </div>

          <div className="mt-6 flex gap-3">
            <button
              className="bg-red-600 text-white px-5 py-2 rounded shadow hover:bg-red-700"
              onClick={handleAddTwo}
            >
              Add Offer to Cart
            </button>
            <Link
              className="inline-block px-5 py-2 border rounded text-red-600 border-red-200 hover:bg-red-50"
              href="/productlist"
            >
              See Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
