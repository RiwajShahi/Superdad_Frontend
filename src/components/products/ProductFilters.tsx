const ProductFilters = () => {
  return (
    <div className="flex gap-4 text-sm">
      <select className="border border-border px-3 py-2 rounded-md bg-background">
        <option>Featured</option>
        <option>Price Low to High</option>
        <option>Price High to Low</option>
      </select>

      <select className="border border-border px-3 py-2 rounded-md bg-background">
        <option>All Categories</option>
        <option>Baby Sets</option>
        <option>Clothing</option>
      </select>
    </div>
  );
};

export default ProductFilters;