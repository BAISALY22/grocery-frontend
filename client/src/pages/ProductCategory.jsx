

import React, { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const ProductCategory = () => {
  const { products } = useContext(AppContext);
  const { category } = useParams();

  const filteredProducts =
    products?.filter(
      (product) =>
        product.category.toLowerCase() === category?.toLowerCase()
    ) || [];

  return (
    <div className="mt-16">
      <h1 className="text-3xl md:text-4xl font-medium">
        {category?.toUpperCase()}
      </h1>

      {filteredProducts.length > 0 ? (
        <div className="my-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      ) : (
        <h1 className="text-3xl md:text-4xl font-medium">
          No products found in this category
        </h1>
      )}
    </div>
  );
};

export default ProductCategory;
