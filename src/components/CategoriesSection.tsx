"use client";

import { CATEGORIES, Category } from "@/data";

const CategoriesSection = ({
  onSelectCategory,
}: {
  onSelectCategory: (category: Category) => void;
}) => {
  return (
    <div className="p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Browse by Category
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id as Category)}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-48"
          >
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/70 z-10 group-hover:to-black/80 transition-all" />

            <div className="relative h-full flex items-center justify-center">
              {category.id === "pizza" && <div className="text-6xl">🍕</div>}
              {category.id === "burger" && <div className="text-6xl">🍔</div>}
              {category.id === "pasta" && <div className="text-6xl">🍝</div>}
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-end p-4 z-20">
              <h3 className="text-white text-2xl font-bold">{category.name}</h3>
              <p className="text-gray-200 text-sm text-center mt-2">
                {category.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
