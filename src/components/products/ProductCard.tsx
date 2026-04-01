import type { Product } from "../../types/product";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }: { product: Product }) => {
    const navigate = useNavigate()
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group cursor-pointer "
    >
      {/* Image Container */}
      <div className="relative bg-gray-100 rounded-2xl overflow-hidden"
        onClick={() => navigate(`/products/${product.id}`)}
        >
        {/* Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-pink-300/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
          <p className="text-white text-sm font-medium drop-shadow-md">
            {product.name}
          </p>
        </div>
      </div>

      {/* Colors */}
      <div className="flex gap-2 mt-3">
        {product.colors.map((color, i) => (
          <span
            key={i}
            className="w-4 h-4 rounded-full border border-gray-300 shadow-sm"
            style={{ backgroundColor: color }}
          ></span>
        ))}
      </div>

      {/* Title (visible normally) */}
      <h3 className="mt-3 text-sm font-medium text-gray-800 line-clamp-2">
        {product.name}
      </h3>

      {/* Rating */}
      <div className="text-xs text-gray-500 mt-1">
        ⭐ {product.rating} ({product.reviews})
      </div>

      {/* Price Section (Improved) */}
      <div className="mt-2 flex items-center gap-2">
        <p className="text-base font-semibold text-gray-900">
          Rs {product.price.toLocaleString()}
        </p>

        {product.oldPrice && (
          <p className="text-xs text-gray-400 line-through">
            Rs {product.oldPrice.toLocaleString()}
          </p>
        )}

        {product.oldPrice && (
          <span className="text-xs text-pink-500 font-medium">
            Save {product.oldPrice - product.price}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default ProductCard;