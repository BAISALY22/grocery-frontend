// import { useEffect, useContext, useState } from "react";
// import { AppContext } from "../context/AppContext";
// import ProductCard from "../components/ProductCard";
// import ProductSkeleton from "../components/ProductSkeleton";

// const Products = () => {
//   const { products = [], searchQuery } = useContext(AppContext);

//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true);

//     const timer = setTimeout(() => {
//       if (searchQuery && searchQuery.length > 0) {
//         setFilteredProducts(
//           products.filter((product) =>
//             product.name.toLowerCase().includes(searchQuery.toLowerCase())
//           )
//         );
//       } else {
//         setFilteredProducts(products);
//       }

//       setLoading(false);
//     }, 400); // small delay for smooth effect

//     return () => clearTimeout(timer);
//   }, [products, searchQuery]);

//   return (
//     <div className="mt-10 px-4 sm:px-6 lg:px-10">

//       <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium">
//         All Products
//       </h1>

//       <div className="my-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

//         {/* LOADING SKELETON */}
//         {loading &&
//           Array(8)
//             .fill("")
//             .map((_, i) => <ProductSkeleton key={i} />)
//         }

//         {/* PRODUCTS */}
//         {!loading &&
//           filteredProducts
//             .filter((product) => product.inStock)
//             .map((product, index) => (
//               <ProductCard key={index} product={product} />
//             ))
//         }

//       </div>

//     </div>
//   );
// };

// export default Products;


import { useEffect, useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";

const Products = () => {
  const { products = [], searchQuery, loading } = useContext(AppContext);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (searchQuery && searchQuery.length > 0) {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [products, searchQuery]);

  return (
    <div className="mt-10 px-4 sm:px-6 lg:px-10">

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium">
        All Products
      </h1>

      <div className="my-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

        {/* ✅ REAL LOADING */}
        {loading
          ? Array(8).fill("").map((_, i) => <ProductSkeleton key={i} />)
          : filteredProducts
              .filter((product) => product.inStock)
              .map((product, index) => (
                <ProductCard key={index} product={product} />
              ))
        }

      </div>

    </div>
  );
};

export default Products;
