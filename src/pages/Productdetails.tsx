import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-white px-6 py-10">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-sm text-gray-500 hover:text-black"
      >
        ← Back
      </button>

      {/* Layout */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Image */}
        <div className="rounded-2xl overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">
            {product.name}
          </h1>

          {/* Rating */}
          <p className="text-sm text-gray-500 mt-2">
            ⭐ {product.rating} ({product.reviews} reviews)
          </p>

          {/* Price */}
          <div className="mt-4 flex items-center gap-3">
            <p className="text-2xl font-bold text-gray-900">
              Rs {product.price.toLocaleString()}
            </p>

            {product.oldPrice && (
              <p className="text-gray-400 line-through">
                Rs {product.oldPrice.toLocaleString()}
              </p>
            )}
          </div>

          {/* Colors */}
          <div className="mt-5">
            <p className="text-sm text-gray-600 mb-2">Available Colors</p>
            <div className="flex gap-3">
              {product.colors.map((color, i) => (
                <span
                  key={i}
                  className="w-6 h-6 rounded-full border"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="mt-6 text-gray-500 text-sm leading-relaxed">
            This is a premium baby product designed with comfort and safety in mind.
            Soft materials, thoughtful design, and perfect for your little one 💖
          </p>

          {/* Button */}
          <button className="mt-8 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
            Add to Cart 🛒
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;