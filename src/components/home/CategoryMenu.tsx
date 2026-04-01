import { useState } from "react";
import { menuItems } from "@/data/menu";

const CategoryNavbar = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="">
      
      <div className="flex justify-center gap-10 md:gap-14 py-3 text-sm tracking-wide">

        {menuItems.map((item) => (
          <div
            key={item.id}
            className="relative cursor-pointer text-gray-700 font-medium group"
            onMouseEnter={() => window.innerWidth >= 768 && setActive(item.id)}
            onMouseLeave={() => window.innerWidth >= 768 && setActive(null)}
            onClick={() =>
              setActive(active === item.id ? null : item.id)
            }
          >
            {/* Label */}
            <span className="flex items-center gap-5">
              {item.label}
              <span className="text-[10px] opacity-60">⌄</span>
            </span>

            {/* Underline */}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full"></span>

            {/* Dropdown */}
            {active === item.id && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white border rounded-xl shadow-lg p-4 z-50">
                <p className="text-xs text-gray-400">
                  Placeholder content for {item.label}
                </p>
              </div>
            )}
          </div>
        ))}

      </div>
    </div>
  );
};

export default CategoryNavbar;