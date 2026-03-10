"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
// import { toast } from "react-toastify";

const CheckoutPage = () => {
  const router = useRouter();
  const { items, clearCart } = useCart();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [loading, setLoading] = useState(false);

  const isPostalValid = /^\d{6}$/.test(postalCode);
  const isCvvValid = /^\d{3}$/.test(cvv);
  const isCardValid = /^\d{16}$/.test(cardNumber);
  const isExpiryValid = /^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry);

  const isFormValid =
    name.trim() &&
    address.trim() &&
    city.trim() &&
    isPostalValid &&
    isCardValid &&
    isExpiryValid &&
    isCvvValid;

  const totalPrice = items.reduce((acc, i) => acc + i.price * i.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Dummy processing
    setTimeout(() => {
      // toast.success("Payment successful! Order placed.");
      clearCart();
      router.push("/");
    }, 1000);
  };

  if (items.length === 0) {
    return (
      <div className="p-6">
        <p>Your cart is empty.</p>
        <button
          className="mt-4 text-red-500 underline"
          onClick={() => router.push("/productlist")}
        >
          Browse Products
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Complete Your Order
      </h1>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-1 gap-8 items-center justify-center">
        {/* Left Side: Form */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            Delivery Details
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                placeholder="123 Main St, Apt 4B"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                  placeholder="New York"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Postal Code
                </label>
                <input
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                  maxLength={6}
                  placeholder="100001"
                />
                {!isPostalValid && postalCode && (
                  <p className="text-red-500 text-xs mt-1">
                    Postal code must be 6 digits
                  </p>
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 mt-6 !mb-2">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                  />
                </svg>
                Payment Information
              </h2>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Card Number
              </label>
              <input
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
                className={`w-full border rounded-lg px-4 py-2.5 outline-none transition-all focus:ring-2 focus:ring-red-500 ${
                  cardNumber && !isCardValid
                    ? "border-red-500"
                    : "border-gray-300 focus:border-red-500"
                }`}
                maxLength={16}
                placeholder="4111222233334444"
              />
              {!isCardValid && cardNumber && (
                <p className="text-red-500 text-xs mt-1">
                  Card number must be 16 digits
                </p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Expiry
                </label>
                <input
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  placeholder="MM/YY"
                  required
                  className={`w-full border rounded-lg px-4 py-2.5 outline-none transition-all focus:ring-2 focus:ring-red-500 ${
                    expiry && !isExpiryValid
                      ? "border-red-500"
                      : "border-gray-300 focus:border-red-500"
                  }`}
                />
                {!isExpiryValid && expiry && (
                  <p className="text-red-500 text-xs mt-1">
                    Expiry must be MM/YY
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CVV
                </label>
                <input
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  required
                  maxLength={3}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                  placeholder="123"
                />
                {!isCvvValid && cvv && (
                  <p className="text-red-500 text-xs mt-1">
                    CVV must be 3 digits
                  </p>
                )}
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-lg mt-6 border border-red-100">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">Rs {totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Delivery Fee</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-red-200 mt-2">
                <span className="font-bold text-lg text-gray-800">
                  Total to Pay
                </span>
                <span className="font-bold text-2xl text-red-600">
                  Rs {totalPrice.toFixed(2)}
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-500 text-center flex items-start gap-1 justify-center mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-amber-500 shrink-0"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                Orders cannot be cancelled and are non-refundable once packed
                for delivery.
              </span>
            </p>

            <button
              type="submit"
              disabled={loading || !isFormValid}
              className="w-full mt-6 bg-red-600 text-white font-bold py-4 rounded-xl hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg flex justify-center items-center gap-2"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : (
                "Place Order"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
