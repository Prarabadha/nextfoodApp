"use client";

import Notification from "@/components/Notification";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { FavoritesProvider } from "@/context/FavoritesContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <FavoritesProvider>
            <Notification />
            <Navbar />
            {children}
            <Footer />
            <ToastContainer position="top-right" autoClose={2000} />
          </FavoritesProvider>
        </CartProvider>
      </body>
    </html>
  );
}
