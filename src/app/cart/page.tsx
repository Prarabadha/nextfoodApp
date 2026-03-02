"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

const CartPage = () => {
  const { items, removeItem, clearCart, addItem, decreaseItem } = useCart();
  const totalPrice = items.reduce((acc, i) => acc + i.price * i.quantity, 0);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {items.length === 0 ? (
        <div className="bg-white shadow rounded p-8 text-center min-h-96 flex items-center justify-center">
          <p className="text-gray-600">
            Your cart is empty — add some delicious food!
          </p>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-white shadow-sm rounded-lg p-4"
              >
                {item.img && (
                  <div className="relative w-28 h-28 shrink-0">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-contain rounded"
                    />
                  </div>
                )}

                <div className="flex-1">
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p className="text-gray-500 text-sm mt-1">
                    Rs {item.price.toFixed(2)}
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      className="w-9 h-9 bg-gray-100 text-gray-700 rounded-md flex items-center justify-center shadow-sm"
                      onClick={() => decreaseItem(item.id)}
                    >
                      -
                    </button>
                    <div className="px-3 py-1 border rounded">
                      {item.quantity}
                    </div>
                    <button
                      className="w-9 h-9 bg-gray-100 text-gray-700 rounded-md flex items-center justify-center shadow-sm"
                      onClick={() => addItem(item)}
                    >
                      +
                    </button>
                    <button
                      className="text-red-500 text-sm ml-4"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div className="text-right w-28">
                  <div className="text-gray-700 font-semibold">
                    Rs {(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="bg-white shadow rounded-lg p-6">
            <h3 className="font-semibold text-lg">Order Summary</h3>
            <div className="mt-4 flex justify-between text-gray-600">
              <span>Items ({items.reduce((s, i) => s + i.quantity, 0)})</span>
              <span>Rs {totalPrice.toFixed(2)}</span>
            </div>
            <div className="mt-4 border-t pt-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Total</span>
                <span className="text-xl font-bold">
                  Rs {totalPrice.toFixed(2)}
                </span>
              </div>

              <button
                className="w-full mt-6 bg-red-600 text-white py-3 rounded hover:bg-red-700"
                onClick={() => alert("Proceed to checkout (not implemented)")}
              >
                Checkout
              </button>

              <button
                className="w-full mt-3 border border-gray-200 text-gray-700 py-3 rounded"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};

export default CartPage;
