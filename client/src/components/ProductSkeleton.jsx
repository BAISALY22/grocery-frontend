const ProductSkeleton = () => {
  return (
    <div className="border border-gray-200 rounded-md p-3 animate-pulse bg-white">

      {/* IMAGE */}
      <div className="w-full h-32 bg-gray-200 rounded-md mb-3"></div>

      {/* CATEGORY */}
      <div className="h-3 w-16 bg-gray-200 rounded mb-2"></div>

      {/* NAME */}
      <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>

      {/* RATING */}
      <div className="flex gap-1 mb-3">
        <div className="h-3 w-3 bg-gray-200 rounded"></div>
        <div className="h-3 w-3 bg-gray-200 rounded"></div>
        <div className="h-3 w-3 bg-gray-200 rounded"></div>
        <div className="h-3 w-3 bg-gray-200 rounded"></div>
        <div className="h-3 w-3 bg-gray-200 rounded"></div>
      </div>

      {/* PRICE + BUTTON */}
      <div className="flex justify-between items-center">
        <div className="h-4 w-16 bg-gray-200 rounded"></div>
        <div className="h-8 w-16 bg-gray-200 rounded"></div>
      </div>

    </div>
  );
};

export default ProductSkeleton;