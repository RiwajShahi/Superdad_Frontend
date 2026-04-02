import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { addToCart } = useCart();

  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      {/* Back */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-sm text-gray-500 hover:text-black"
      >
        ← Back
      </button>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* LEFT - IMAGE */}
        <div>
          <div className="rounded-2xl overflow-hidden bg-white shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Thumbnails (fake for now) */}
          <div className="flex gap-3 mt-4">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="w-20 h-20 bg-gray-200 rounded-lg cursor-pointer hover:opacity-80"
              />
            ))}
          </div>
        </div>

        {/* RIGHT - DETAILS */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          {/* Title */}
          <h1 className="text-3xl font-semibold text-gray-800">
            {product.name}
          </h1>

          {/* Rating */}
          <p className="text-sm text-gray-500 mt-2">
            ⭐ {product.rating} ({product.reviews} reviews)
          </p>

          {/* Price */}
          <div className="mt-4 flex items-center gap-3">
            <p className="text-3xl font-bold text-black">
              Rs {product.price.toLocaleString()}
            </p>

            {product.oldPrice && (
              <p className="text-gray-400 line-through">
                Rs {product.oldPrice.toLocaleString()}
              </p>
            )}
          </div>

          {/* Colors */}
          <div className="mt-6">
            <p className="text-sm font-medium text-gray-700 mb-2">
              Select Color
            </p>
            <div className="flex gap-3">
              {product.colors.map((color, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color
                      ? "border-black scale-110"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <p className="text-sm font-medium text-gray-700 mb-2">Quantity</p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-1 border rounded"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-1 border rounded"
              >
                +
              </button>
            </div>
          </div>

          {/* Description */}
          <p className="mt-6 text-gray-500 text-sm leading-relaxed">
            This premium baby product is crafted with ultra-soft materials,
            ensuring maximum comfort and safety. Designed with care for modern
            parents who want the best for their little ones 💖
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button
              onClick={() =>
                addToCart({
                  ...product,
                  selectedColor,
                  quantity,
                })
              }
              className="flex-1 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
            >
              Add to Cart 🛒
            </button>

            <button className="flex-1 border border-black py-3 rounded-xl hover:bg-black hover:text-white transition">
              Buy Now ⚡
            </button>
          </div>

          {/* Extra Info */}
          <div className="mt-8 border-t pt-6 text-sm text-gray-600 space-y-2">
            <p>🚚 Free delivery across Nepal</p>
            <p>🔁 7-day return policy</p>
            <p>🔒 Secure payment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
