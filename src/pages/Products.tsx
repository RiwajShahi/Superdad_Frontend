import { useState } from "react";
import ProductGrid from "../components/products/ProductGrid";
import ProductFilters from "../components/products/ProductFilters";
import SearchBar from "../components/products/SearchBar";
import Pagination from "../components/products/Pagination";
import { products } from "../data/products";

const PRODUCTS_PER_PAGE = 12;

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination logic
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  return (
    <div className="space-y-8">
      
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-xl font-semibold">
          {products.length} products
        </h1>

        <div className="flex gap-4 items-center">
          <SearchBar />
          <ProductFilters />
        </div>
      </div>

      {/* Product Grid */}
      <ProductGrid products={currentProducts} />

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Products;