import { useState } from "react";
import { categories } from "@/data/categories";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CategorySlider = () => {
  const itemsPerView = 4;
  const [index, setIndex] = useState(0);

  const maxIndex = Math.max(categories.length - itemsPerView, 0);

  const handleNext = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="w-full bg-[#faf8f6] py-5">
      {/* Centered Container (creates left/right breathing space) */}
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Left Button */}
        <button
          onClick={handlePrev}
          disabled={index === 0}
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full disabled:opacity-30"
        >
          <ChevronLeft />
        </button>

        {/* Viewport */}
        <div className="overflow-hidden">
          {/* Track */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${(categories.length / itemsPerView) * 100}%`,
              transform: `translateX(-${index * (100 / categories.length)}%)`,
            }}
          >
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="flex flex-col items-center w-1/4 px-6"
              >
                <div className="w-36 h-36 rounded-full bg-[#f3f1ef] flex items-center justify-center shadow-sm hover:scale-105 transition">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <p className="mt-5 text-sm text-gray-700 font-medium text-center">
                  {cat.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={handleNext}
          disabled={index === maxIndex}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full disabled:opacity-30"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default CategorySlider;
