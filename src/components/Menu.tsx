"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { id: 1, title: "HomePage", url: "/" },
  { id: 2, title: "Products", url: "/productlist" },
  { id: 3, title: "Cart", url: "/cart" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {!open ? (
        <Image
          src={"/open.png"}
          alt="menu image"
          height={20}
          width={20}
          onClick={() => setOpen(true)}
          className="cursor-pointer"
        />
      ) : (
        <Image
          src={"/close.png"}
          alt="menu image"
          height={20}
          width={20}
          onClick={() => setOpen(false)}
          className="cursor-pointer"
        />
      )}
      {open && (
        <div className="bg-red-500 text-white absolute top-24 left-0 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {links.map((item) => (
            <Link onClick={() => setOpen(false)} href={item.url} key={item.id}>
              {item.title}
            </Link>
          ))}

          {/* <Link
            href="/cart"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2"
          >
            <CartIcon />
          </Link> */}
        </div>
      )}
    </div>
  );
};

export default Menu;
