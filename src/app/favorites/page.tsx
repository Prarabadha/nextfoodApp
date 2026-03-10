"use client";

import Link from "next/link";
import Image from "next/image";
import { useFavorites } from "@/context/FavoritesContext";
// import { toast } from "react-toastify";

const FavoritesPage = () => {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="p-6 text-center h-[457px] flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-semibold">No favorites yet</h2>
        <p className="mt-4">
          Browse the{" "}
          <Link href="/productlist" className="text-red-500">
            products
          </Link>{" "}
          and tap the heart to add some!
        </p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Favorites</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {favorites.map((product) => {
          const isFav = isFavorite(product.id);
          return (
            <div
              key={product.id}
              className="relative shadow-lg rounded-lg p-4 flex flex-col items-center hover:shadow-lg transition bg-white"
            >
              <div
                className="absolute top-2 right-2 cursor-pointer text-xl"
                onClick={() => {
                  toggleFavorite(product);
                  // toast.success("Removed from favorites");
                  alert("Removed from favorites");
                }}
              >
                {isFav ? "❤️" : "🤍"}
              </div>

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
              <h3 className="mt-2 font-semibold text-center text-lg">
                {product.title}
              </h3>
              <p className="text-sm text-gray-600 text-center mt-1 line-clamp-2">
                {product.desc}
              </p>
              <p className="text-lg font-bold text-red-500 mt-2">
                Rs {product.price}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FavoritesPage;
