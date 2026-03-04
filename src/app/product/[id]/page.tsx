"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { pizzas } from "@/data";
import { useCart } from "@/context/CartContext";
import { toast } from "react-toastify";

const ProductDetailPage = () => {
  const router = useRouter();
  const params = useParams();

  const { addItem } = useCart();

  const id = parseInt(params.id as string, 10);
  const product = pizzas.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="p-6">
        <p>Product not found.</p>
        <button
          className="mt-4 text-red-500"
          onClick={() => router.push("/productlist")}
        >
          Back to products
        </button>
      </div>
    );
  }

  const handleAdd = () => {
    addItem(product);
    toast.success("Added to cart!");
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image column */}
        <div className="md:w-1/2 bg-white shadow rounded-lg p-4">
          {product.img && (
            <div className="relative w-full h-96">
              <Image
                src={product.img}
                alt={product.title}
                fill
                className="object-contain"
              />
            </div>
          )}
        </div>

        {/* Details column */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="mt-4 text-gray-700">{product.desc}</p>
          </div>

          <div className="mt-6">
            <span className="text-2xl font-semibold">Rs {product.price}</span>
            <button
              className="ml-4 bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
              onClick={handleAdd}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
