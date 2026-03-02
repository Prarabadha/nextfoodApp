"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useCart } from "@/context/CartContext";

const CartIcon = () => {
  const { items } = useCart();
  const totalQuantity = items.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <>
      <Link href="/cart" className="flex items-center gap-2">
        <div className="relative w-8 h-8 md:w-5 md:h-5">
          <Image src="/cart.png" alt="cartImage" fill />
        </div>
        <span>Cart ({totalQuantity})</span>
      </Link>
    </>
  );
};

export default CartIcon;
