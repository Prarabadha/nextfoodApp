"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useCart } from "@/context/CartContext";
import { usePathname } from "next/navigation";

const CartIcon = () => {
  const path = usePathname();
  const { items } = useCart();
  const totalQuantity = items.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <>
      <Link href="/cart" className="flex items-center gap-2">
        <div className="relative w-8 h-8 md:w-5 md:h-5">
          <Image src="/cart.png" alt="cartImage" fill />
        </div>
        <span className={`${path === "/cart" ? "font-bold" : "font-normal"}`}>
          Cart ({totalQuantity})
        </span>
      </Link>
    </>
  );
};

export default CartIcon;
