type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {
  
  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-3 mt-10">

      {/* Previous */}
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`px-4 py-2 text-sm border rounded-md ${
          currentPage === 1
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-muted"
        }`}
      >
        Previous
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 text-sm border rounded-md ${
            currentPage === page
              ? "bg-foreground text-background"
              : "hover:bg-muted"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 text-sm border rounded-md ${
          currentPage === totalPages
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-muted"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;