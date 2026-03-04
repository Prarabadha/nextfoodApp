"use client";
import Link from "next/link";
import { pizzas } from "@/data";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { toast } from "react-toastify";

const ProductListPage = () => {
  const { addItem } = useCart();

  const handleAdd = (product: (typeof pizzas)[number]) => {
    addItem(product);
    toast.success("Added to cart!");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {pizzas.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 flex flex-col items-center hover:shadow-lg transition"
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
            <h3 className="mt-2 font-semibold text-center">{product.title}</h3>
            <p className="text-lg font-bold">Rs {product.price}</p>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => handleAdd(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
