// // import React, { useContext, useState } from "react";
// // import { AppContext } from "../context/AppContext";
// // import { assets } from "../assets/assets";

// // const ProductCard = ({ product }) => {
// //   const { navigate, addToCart, cartItems, removeFromCart } =
// //     useContext(AppContext);
// //   const [count, setCount] = useState(0);

// //   return (
// //     product && (
// //       <div
// //         onClick={() => {
// //           navigate(`/product/${product.category.toLowerCase()}/${product._id}`);
// //         }}
// //         className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white min-w-56 max-w-60 w-full"
// //       >
// //         <div className="group cursor-pointer flex items-center justify-center px-2">
// //           <img
// //             className="group-hover:scale-105 transition max-w-26 md:max-w-36"
// //             src={`http://localhost:5000/images/${product.image[0]}`}
// //             alt={product.name}
// //           />
// //         </div>
// //         <div className="text-gray-500/60 text-sm">
// //           <p>{product.category}</p>
// //           <p className="text-gray-700 font-medium text-lg truncate w-full">
// //             {product.name}
// //           </p>
// //           <div className="flex items-center gap-0.5">
// //             {Array(5)
// //               .fill("")
// //               .map((_, i) => (
// //                 <img
// //                   key={i}
// //                   src={i < 4 ? assets.star_icon : assets.star_dull_icon}
// //                   alt="rating"
// //                   className="w-3 md:w-3.5"
// //                 />
// //               ))}
// //           </div>
// //           <div className="flex items-end justify-between mt-3">
// //             <p className="md:text-xl text-base font-medium text-pink-500">
// //               ${product.offerPrice}{" "}
// //               <span className="text-gray-500/60 md:text-sm text-xs line-through">
// //                 ${product.price}
// //               </span>
// //             </p>
// //             <div onClick={(e) => e.stopPropagation()} className="text-pink-500">
// //               {!cartItems[product._id] ? (
// //                 <button
// //                   className="flex items-center justify-center gap-1 bg-pink-500 border border-pink-300 md:w-[80px] w-[64px] h-[34px] rounded text-white font-medium"
// //                   onClick={() => addToCart(product._id)}
// //                 >
// //                   <svg
// //                     width="14"
// //                     height="14"
// //                     viewBox="0 0 14 14"
// //                     fill="none"
// //                     xmlns="http://www.w3.org/2000/svg"
// //                   >
// //                     <path
// //                       d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
// //                       stroke="#615fff"
// //                       stroke-linecap="round"
// //                       stroke-linejoin="round"
// //                     />
// //                   </svg>
// //                   Add
// //                 </button>
// //               ) : (
// //                 <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-8.5 bg-pink-300/25 rounded select-none">
// //                   <button
// //                     onClick={() => removeFromCart(product._id)}
// //                     className="cursor-pointer text-md px-2 h-full"
// //                   >
// //                     -
// //                   </button>
// //                   <span className="w-5 text-center">
// //                     {cartItems[product._id]}
// //                   </span>
// //                   <button
// //                     onClick={() => addToCart(product._id)}
// //                     className="cursor-pointer text-md px-2 h-full"
// //                   >
// //                     +
// //                   </button>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     )
// //   );
// // };

// // export default ProductCard;


// import React, { useContext } from "react";
// import { AppContext } from "../context/AppContext";
// import { assets } from "../assets/assets";

// const ProductCard = ({ product }) => {
//   const { navigate, addToCart, cartItems, removeFromCart } =
//     useContext(AppContext);

//   return (
//     product && (
//       <div
//         onClick={() => {
//           navigate(
//             `/product/${product.category.toLowerCase()}/${product._id}`
//           );
//         }}
//         className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white min-w-56 max-w-60 w-full"
//       >
//         {/* IMAGE */}
//         <div className="group cursor-pointer flex items-center justify-center px-2">
//           <img
//             className="group-hover:scale-105 transition max-w-26 md:max-w-36"
//             src={product.image}
//             alt={product.name}
//           />
//         </div>

//         {/* DETAILS */}
//         <div className="text-gray-500/60 text-sm">

//           <p>{product.category}</p>

//           <p className="text-gray-700 font-medium text-lg truncate w-full">
//             {product.name}
//           </p>

//           {/* RATING */}
//           <div className="flex items-center gap-0.5">
//             {Array(5)
//               .fill("")
//               .map((_, i) => (
//                 <img
//                   key={i}
//                   src={
//                     i < 4
//                       ? assets.star_icon
//                       : assets.star_dull_icon
//                   }
//                   alt="rating"
//                   className="w-3 md:w-3.5"
//                 />
//               ))}
//           </div>

//           {/* PRICE + CART */}
//           <div className="flex items-end justify-between mt-3">

//             <p className="md:text-xl text-base font-medium text-pink-500">
//               ${product.offerPrice}{" "}
//               <span className="text-gray-500/60 md:text-sm text-xs line-through">
//                 ${product.price}
//               </span>
//             </p>

//             <div
//               onClick={(e) => e.stopPropagation()}
//               className="text-pink-500"
//             >

//               {!cartItems[product._id] ? (
//                 <button
//                   className="flex items-center justify-center gap-1 bg-pink-500 border border-pink-300 md:w-[80px] w-[64px] h-[34px] rounded text-white font-medium"
//                   onClick={() => addToCart(product._id)}
//                 >
//                   <svg
//                     width="14"
//                     height="14"
//                     viewBox="0 0 14 14"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
//                       stroke="#615fff"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                   Add
//                 </button>
//               ) : (
//                 <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-8.5 bg-pink-300/25 rounded select-none">

//                   <button
//                     onClick={() => removeFromCart(product._id)}
//                     className="cursor-pointer text-md px-2 h-full"
//                   >
//                     -
//                   </button>

//                   <span className="w-5 text-center">
//                     {cartItems[product._id]}
//                   </span>

//                   <button
//                     onClick={() => addToCart(product._id)}
//                     className="cursor-pointer text-md px-2 h-full"
//                   >
//                     +
//                   </button>

//                 </div>
//               )}

//             </div>

//           </div>

//         </div>
//       </div>
//     )
//   );
// };

// export default ProductCard;


import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const ProductCard = ({ product }) => {
  const { navigate, addToCart, cartItems, removeFromCart } =
    useContext(AppContext);

  return (
    product && (
      <div
        onClick={() =>
          navigate(`/product/${product.category.toLowerCase()}/${product._id}`)
        }
        className="border border-gray-500/20 rounded-md p-3 bg-white w-full max-w-[220px] mx-auto"
      >

        {/* IMAGE */}
        <div className="group cursor-pointer flex items-center justify-center">
          <img
            className="group-hover:scale-105 transition w-28 sm:w-32 md:w-36 object-contain"
            src={product.image}
            alt={product.name}
          />
        </div>

        {/* DETAILS */}
        <div className="text-gray-500/60 text-sm mt-2">

          <p className="text-xs">{product.category}</p>

          <p className="text-gray-700 font-medium text-base sm:text-lg truncate">
            {product.name}
          </p>

          {/* RATING */}
          <div className="flex items-center gap-0.5">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <img
                  key={i}
                  src={
                    i < 4 ? assets.star_icon : assets.star_dull_icon
                  }
                  alt="rating"
                  className="w-3"
                />
              ))}
          </div>

          {/* PRICE + CART */}
          <div className="flex items-end justify-between mt-3">

            <p className="text-base sm:text-lg font-medium text-pink-500">
              ${product.offerPrice}{" "}
              <span className="text-gray-500/60 text-xs line-through">
                ${product.price}
              </span>
            </p>

            <div
              onClick={(e) => e.stopPropagation()}
              className="text-pink-500"
            >

              {!cartItems[product._id] ? (
                <button
                  className="flex items-center justify-center gap-1 bg-pink-500 w-[70px] h-[32px] rounded text-white text-sm"
                  onClick={() => addToCart(product._id)}
                >
                  Add
                </button>
              ) : (
                <div className="flex items-center justify-center gap-2 w-[70px] h-[32px] bg-pink-300/25 rounded">

                  <button
                    onClick={() => removeFromCart(product._id)}
                    className="px-2"
                  >
                    -
                  </button>

                  <span className="text-sm">
                    {cartItems[product._id]}
                  </span>

                  <button
                    onClick={() => addToCart(product._id)}
                    className="px-2"
                  >
                    +
                  </button>

                </div>
              )}

            </div>

          </div>

        </div>
      </div>
    )
  );
};

export default ProductCard;