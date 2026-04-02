import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const navItems = [
  { name: "HOME", path: "/", icon: "🏠" },
  { name: "PRODUCTS", path: "/products", icon: "🛍️" },
  { name: "EMAIL", path: "/contact", icon: "📩" },
  { name: "ABOUT", path: "/about", icon: "👶" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const { state } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full h-30 px-6 md:px-10 backdrop-blur-md border-b border-gray-200  top-0 z-50 flex items-center">
      <div className="flex items-center justify-between w-full">
        {/* Logo (Left) */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="SuperDad Logo"
            className="h-25 w-auto object-contain"
          />
        </Link>

        {/* Desktop Links (Right) */}
        <ul className="hidden md:flex gap-10 text-xs tracking-wide items-center ml-auto">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              <Link
                to={item.path}
                className="flex items-center gap-2 cursor-pointer"
              >
                <span className="text-base">{item.icon}</span>
                {item.name}
              </Link>

              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}

          {/* 🛒 CART ICON */}
          <button onClick={() => navigate("/cart")} className="relative">
            🛒
            {state.items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 rounded-full">
                {state.items.length}
              </span>
            )}
          </button>
        </ul>

        {/* Mobile Hamburger */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden cursor-pointer ml-auto"
        >
          <div
            className={`w-6 h-0.5 bg-black transition ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-black my-1 transition ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-black transition ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
