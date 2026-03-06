"use client";
import Link from "next/link";
import { pizzas, getProductsByCategory, CATEGORIES, Category } from "@/data";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { toast } from "react-toastify";
import { useState } from "react";
import CategoriesSection from "@/components/CategoriesSection";

const ProductListPage = () => {
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<Category>("pizza");

  const products = getProductsByCategory(selectedCategory);
  const categoryInfo = CATEGORIES.find((c) => c.id === selectedCategory);

  const handleAdd = (product: (typeof pizzas)[number]) => {
    addItem(product);
    toast.success("Added to cart!");
  };

  return (
    <div>
      <CategoriesSection onSelectCategory={setSelectedCategory} />

      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 flex flex-col items-center hover:shadow-lg transition bg-white"
            >
              {product.img && (
                <Link
                  href={`/product/${product.id}`}
                  className="relative w-40 h-40 block"
                >
                  <Image
                    src={product.img}
                    alt={product.title}
                    fill
                    className="object-contain"
                  />
                </Link>
              )}
              <h3 className="mt-2 font-semibold text-center text-lg">
                {product.title}
              </h3>
              <p className="text-sm text-gray-600 text-center mt-1 line-clamp-2">
                {product.desc}
              </p>
              <p className="text-lg font-bold text-red-500 mt-2">
                Rs {product.price}
              </p>
              <button
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                onClick={() => handleAdd(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
