import React, { useContext, useMemo } from "react";
import { AppContext } from "../context/AppContext";
import ProductCard from "./ProductCard";
import ProductSkeleton from "./ProductSkeleton";

const SmartPicks = () => {
  const { products, loading } = useContext(AppContext);

  const smartProducts = useMemo(() => {
    if (!products || products.length === 0) return [];

    return [...products]
      .sort(() => 0.5 - Math.random())
      .slice(0, 5); // same count as your other sections (adjust if needed)
  }, [products]);

  return (
    <div className="mt-8">

      {/* Heading SAME style */}
      <p className="text-2xl font-medium mb-4">
        Today’s Smart Picks
      </p>

      {/* SAME layout as your Products page */}
     <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
        
        {loading
          ? Array(6).fill("").map((_, i) => <ProductSkeleton key={i} />)
          : smartProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
        }

      </div>

    </div>
  );
};

export default SmartPicks;





