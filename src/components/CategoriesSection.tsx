"use client";

import { CATEGORIES, Category } from "@/data";
import { useState, ChangeEvent } from "react";

const CategoriesSection = ({
  onSelectCategory,
  onSearch,
}: {
  onSelectCategory: (category: Category) => void;
  onSearch?: (query: string) => void;
}) => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  return (
    <div className="relative p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Browse by Category</h2>
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search products..."
          className="border rounded px-3 py-1 w-60 border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id as Category)}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-25 cursor-pointer"
          >
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/70 z-10 group-hover:to-black/80 transition-all" />

            <div className="relative h-full flex items-center justify-center">
              {category.id === "pizza" && <div className="text-6xl">🍕</div>}
              {category.id === "burger" && <div className="text-6xl">🍔</div>}
              {category.id === "pasta" && <div className="text-6xl">🍝</div>}
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-end p-4 z-20">
              <h3 className="text-white text-2xl font-bold">{category.name}</h3>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
