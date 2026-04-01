import { useState, useEffect } from "react";
import { heroSlides } from "@/data/heroSlides";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <div className="relative w-full min-h-[140vh] overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-[100%] object-cover object-bottom"
          />

          <div className="absolute inset-0 bg-white/30" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-4xl md:text-6xl font-semibold text-gray-800">
              {slide.title}
            </h1>

            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-md">
              {slide.subtitle}
            </p>

            <button className="mt-6 px-6 py-3 bg-black text-white rounded-full hover:scale-105 transition">
              Explore
            </button>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
      >
        <ChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition ${
              current === i ? "bg-black w-6" : "bg-gray-300 w-2.5"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
