import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link href="/" className="text-2xl font-bold text-red-500">
            Next Food
          </Link>
          <p className="mt-3 text-gray-400">
            Delicious food delivered to your door.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/cart">Cart</Link>
            </li>
            <li>
              <Link href="/productlist">Products</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-gray-400">support@nextfood.example</p>
          <p className="text-gray-400 mt-1">+91 8378848890</p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-500">
        © {new Date().getFullYear()} Next Food. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
