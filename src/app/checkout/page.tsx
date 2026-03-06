"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { toast } from "react-toastify";

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
      toast.success("Payment successful! Order placed.");
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
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Address</label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">City</label>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Postal Code</label>
            <input
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
              className="w-full border rounded px-3 py-2"
              maxLength={6}
            />
            {!isPostalValid && postalCode && (
              <p className="text-red-500 text-xs mt-1">
                Postal code must be 6 digits
              </p>
            )}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">Card Number</label>
          <input
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
            className={`w-full border rounded px-3 py-2 ${
              cardNumber && !isCardValid ? "border-red-500" : ""
            }`}
            maxLength={16}
          />
          {!isCardValid && cardNumber && (
            <p className="text-red-500 text-xs mt-1">
              Card number must be 16 digits
            </p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Expiry</label>
            <input
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              placeholder="MM/YY"
              required
              className={`w-full border rounded px-3 py-2 ${
                expiry && !isExpiryValid ? "border-red-500" : ""
              }`}
            />
            {!isExpiryValid && expiry && (
              <p className="text-red-500 text-xs mt-1">Expiry must be MM/YY</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">CVV</label>
            <input
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
              maxLength={3}
              className="w-full border rounded px-3 py-2"
            />
            {!isCvvValid && cvv && (
              <p className="text-red-500 text-xs mt-1">CVV must be 3 digits</p>
            )}
          </div>
        </div>
        <div className="mt-4">
          <span className="font-semibold">
            To Pay: Rs {totalPrice.toFixed(2)}
          </span>
        </div>
        <p>
          <span className="text-red-600">Note</span> : Orders Cannot be
          cancelled and are non-refundable once packed for delivery
        </p>
        <button
          type="submit"
          disabled={loading || !isFormValid}
          className="w-full mt-6 bg-red-600 text-white py-3 rounded hover:bg-red-700 disabled:opacity-50"
        >
          {loading ? "Processing..." : "Place Order"}
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
