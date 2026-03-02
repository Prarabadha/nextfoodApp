"use client";

import { featuredProducts } from "@/data";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { toast } from "react-toastify";
import React from "react";

const Featured = () => {
  const { addItem } = useCart();

  const handleAdd = (item: (typeof featuredProducts)[number]) => {
    addItem(item);
    toast.success("Added to cart!");
  };

  return (
    <div className="overflow-x-scroll text-red-400">
      {/* Wrapper */}
      <div className="w-max flex">
        {/* Single Item */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
            {/* Image Container */}
            {item.img && (
              <div className="relative flex-1 w-full hover:rotate-60 transition-all duration-500">
                <Image src={item.img} className="object-contain" alt="" fill />
              </div>
            )}
            {/* Text Container */}
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                {item.title}
              </h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">Rs {item.price}</span>
              <button
                className="bg-red-500 text-white p-2"
                onClick={() => handleAdd(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
