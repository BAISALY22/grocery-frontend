
// import { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { AppContext } from "../context/AppContext";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const { products, addToCart, navigate } = useContext(AppContext);

//   const [product, setProduct] = useState(null);
//   const [thumbnail, setThumbnail] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!products || products.length === 0) return;

//     const foundProduct = products.find((item) => item._id === id);

//     setProduct(foundProduct || null);
//     setLoading(false);
//   }, [products, id]);

//   useEffect(() => {
//     if (product?.image?.length > 0) {
//       setThumbnail(product.image[0]);
//     }
//   }, [product]);

//   if (loading) {
//     return <p className="py-20 text-center">Loading product...</p>;
//   }

//   if (!product) {
//     return <p className="py-20 text-center">Product not found</p>;
//   }


// //buynow handler
// const handleBuyNow = () => {
//   addToCart(product._id);   
//   navigate("/cart");        
// };



//   return (
//     <div className="max-w-6xl w-full px-6 py-10">
//       {/* Breadcrumb */}
//       <p className="text-sm text-gray-500">
//         Home / Products / {product.category} /{" "}
//         <span className="text-indigo-500">{product.name}</span>
//       </p>

//       <div className="flex flex-col md:flex-row gap-16 mt-6">
//         {/* Images */}
//         <div className="flex gap-3">
//           <div className="flex flex-col gap-3">
//             {product.image.map((img, index) => (
//               <div
//                 key={index}
//                 onClick={() => setThumbnail(img)}
//                 className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer"
//               >
//                 <img src={product.image}
//                  alt="product thumbnail" />
//               </div>
//             ))}
//           </div>

//           <div className="border border-gray-500/30 max-w-[420px] rounded overflow-hidden">
//             <img
//               src={`http://localhost:5000/images/${thumbnail}`}
//               alt={product.name}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>

//         {/* Details */}
//         <div className="text-sm w-full md:w-1/2">
//           <h1 className="text-3xl font-medium">{product.name}</h1>

//           {/* Price */}
//           <div className="mt-6">
//             <p className="text-gray-500/70 line-through">
//               MRP: ₹{product.price}
//             </p>
//             <p className="text-2xl font-medium">₹{product.offerPrice}</p>
//             <span className="text-gray-500/70">(inclusive of all taxes)</span>
//           </div>

//           {/* Description */}
//           <p className="text-base font-medium mt-6">About Product</p>
//           <ul className="list-disc ml-4 text-gray-500/70">
//             {product.description.map((desc, index) => (
//               <li key={index}>{desc}</li>
//             ))}
//           </ul>

//           {/* Actions */}
//           <div className="flex items-center mt-10 gap-4 text-base">
//             <button
//               onClick={() => addToCart(product._id)}
//               className="w-full py-3.5 font-medium bg-gray-100 hover:bg-gray-200 transition"
//             >
//               Add to Cart
//             </button>

//             <button
//              onClick={handleBuyNow}
//             className="w-full py-3.5 font-medium bg-indigo-500 text-white hover:bg-indigo-600 transition">
//               Buy now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;




import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, addToCart, navigate } = useContext(AppContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!products || products.length === 0) return;

    const foundProduct = products.find((item) => item._id === id);

    setProduct(foundProduct || null);
    setLoading(false);
  }, [products, id]);

  if (loading) {
    return <p className="py-20 text-center">Loading product...</p>;
  }

  if (!product) {
    return <p className="py-20 text-center">Product not found</p>;
  }

  // buy now handler
  const handleBuyNow = () => {
    addToCart(product._id);
    navigate("/cart");
  };

  return (
    <div className="max-w-6xl w-full px-6 py-10">

      {/* Breadcrumb */}
      <p className="text-sm text-gray-500">
        Home / Products / {product.category} /{" "}
        <span className="text-indigo-500">{product.name}</span>
      </p>

      <div className="flex flex-col md:flex-row gap-16 mt-6">

        {/* IMAGE */}
        <div className="flex gap-3">

          <div className="flex flex-col gap-3">
            {/* removed map because image is NOT an array */}
            <div className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* MAIN IMAGE */}
          <div className="border border-gray-500/30 max-w-[420px] rounded overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* DETAILS */}
        <div className="text-sm w-full md:w-1/2">

          <h1 className="text-3xl font-medium">{product.name}</h1>

          {/* PRICE */}
          <div className="mt-6">
            <p className="text-gray-500/70 line-through">
              MRP: ₹{product.price}
            </p>
            <p className="text-2xl font-medium">
              ₹{product.offerPrice}
            </p>
            <span className="text-gray-500/70">
              (inclusive of all taxes)
            </span>
          </div>

          {/* DESCRIPTION */}
          <p className="text-base font-medium mt-6">About Product</p>

          <ul className="list-disc ml-4 text-gray-500/70">
            {product.description?.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>

          {/* ACTIONS */}
          <div className="flex items-center mt-10 gap-4 text-base">

            <button
              onClick={() => addToCart(product._id)}
              className="w-full py-3.5 font-medium bg-gray-100 hover:bg-gray-200 transition"
            >
              Add to Cart
            </button>

            <button
              onClick={handleBuyNow}
              className="w-full py-3.5 font-medium bg-indigo-500 text-white hover:bg-indigo-600 transition"
            >
              Buy now
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;



