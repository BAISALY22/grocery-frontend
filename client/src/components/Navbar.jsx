// // import { useState , useEffect} from "react"
// // import { Link } from "react-router-dom";
// // import { useContext } from "react";
// // import { AppContext } from "../context/AppContext.jsx";
// // import { assets } from "../assets/assets";


// // const Navbar = () => {
// //     const [open, setOpen] =useState(false)
// //     const { user, setUser, navigate, setShowUserLogin, cartCount , searchQuery, setSearchQuery} = useContext(AppContext);

// // useEffect(() => {
// //     if (searchQuery.length > 0){
// //     navigate("/products")
// // }
// // }, [searchQuery])
 
// //     return (
// //         <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

// //            <Link to={"/"}>
// //            <h1 className="text-2xl font-bold text-pink-700">GroceryApp</h1>
// //            </Link>

// //             {/* Desktop Menu */}
// //             <div className="hidden sm:flex items-center gap-8">
// //                <Link to={"/"} className="text-sm hover:text-pink-500 transition">Home</Link>
// //                <Link to={"/products"} className="text-sm hover:text-pink-500 transition">All  Products</Link>

// //                 <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
// //                     <input 
// //                     onChange={(e) => setSearchQuery(e.target.value)}
// //                     className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
// //                     <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
// //                         <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
// //                         <path clip-rule="evenodd" d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#7A7B7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
// //                     </svg>
// //                 </div>

// //                 <div onClick={()=>navigate("/cart")} className="relative cursor-pointer">
// //                     <img src={assets.cart_icon} alt="cart" className="w-10 h-10"/>
// //                     <button className="absolute -top-2 -right-3 text-xs text-white bg-pink-500 w-[18px] h-[18px] rounded-full">{cartCount()}</button>
// //                 </div>

// //      {user ? (
// // <>
// // <div className="relative group">
// //     <img src={assets.profile_icon} alt="" className="w-10"/>
// //     <ul className="hidden group-hover:block absolute top-10 right-10 bg-white shadow-md rounded-md border border-grey-200 py-2 w-30 z-40 text-sm">
// //         <li onClick={() => {
// //             navigate("/my-orders")
// //         }}
// //          className="p-1.5 cursor-pointer">
// //             my orders
// //             </li>
// //         <li onClick={() => setUser(null)} 
// //         className="p-1.5 cursor-pointer">logout</li>
// //     </ul>
// // </div>
// // </>    
// //      ):(
// //          <button onClick={()=> {
// //             setShowUserLogin(true)
// //          }} className="cursor-pointer px-8 py-2 bg-pink-500 hover:bg-pink-600 transition text-white rounded-full">
// //                     Login
// //                 </button>
// //      ) }
               
// //             </div>

// //             <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
// //                 {/* Menu Icon SVG */}
// //                 <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
// //                     <rect width="21" height="1.5" rx=".75" fill="#426287" />
// //                     <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
// //                     <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
// //                 </svg>
// //             </button>

// //             {/* Mobile Menu */}
            
// //             <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
// //                 <Link to={"/"} className="text-sm hover:text-pink-500 transition">Home</Link>
// //                <Link to={"/products"} className="text-sm hover:text-pink-500 transition">All  Products</Link>
               
// //                     {user ? (
// // <>
// // <div className="relative group">
// //     <img src={assets.profile_icon} alt="" className="w-10"/>
// //     <ul className="hidden group-hover:block absolute top-10 right-10 bg-white shadow-md rounded-md border border-grey-200 py-2 w-30 z-40 text-sm">
// //         <li onClick={() => {
// //             navigate("/my-orders")
// //         }}
// //          className="p-1.5 cursor-pointer">
// //             my orders
// //             </li>
// //         <li onClick={() => setUser(null)} 
// //         className="p-1.5 cursor-pointer">logout</li>
// //     </ul>
// // </div>
// // </>    
// //      ):(
// //          <button className="cursor-pointer px-8 py-2 bg-pink-500 hover:bg-pink-600 transition text-white rounded-full">
// //                     Login
// //                 </button>
// //      ) }
// //             </div>

// //         </nav>
// //     )
// // }
// // export default Navbar




// import { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";
// import { AppContext } from "../context/AppContext.jsx";
// import { assets } from "../assets/assets";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   const {
//     user,
//     setUser,
//     navigate,
//     setShowUserLogin,
//     cartCount,
//     searchQuery,
//     setSearchQuery,
//   } = useContext(AppContext);

//   useEffect(() => {
//     if (searchQuery.length > 0) {
//       navigate("/products");
//     }
//   }, [searchQuery]);

//   return (
//     <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white sticky top-0 z-50 transition-all">

//       {/* Logo */}
//       <Link to={"/"}>
//         <h1 className="text-2xl font-bold text-pink-700">Grocerly</h1>
//       </Link>

//       {/* Desktop Menu */}
//       <div className="hidden sm:flex items-center gap-8">
//         <Link to={"/"} className="text-sm hover:text-pink-500 transition">
//           Home
//         </Link>
//         <Link to={"/products"} className="text-sm hover:text-pink-500 transition">
//           All Products
//         </Link>

//         {/* Search */}
//         <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
//           <input
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
//             type="text"
//             placeholder="Search products"
//           />
//           <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//             <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
//             <path
//               d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
//               stroke="#7A7B7D"
//               strokeWidth="1.2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </div>

//         {/* Cart */}
//         <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
//           <img src={assets.cart_icon} alt="cart" className="w-10 h-10" />
//           <button className="absolute -top-2 -right-3 text-xs text-white bg-pink-500 w-[18px] h-[18px] rounded-full">
//             {cartCount()}
//           </button>
//         </div>

//         {/* User / Login */}
//         {user ? (
//           <div className="relative group">
//             <img src={assets.profile_icon} alt="" className="w-10 cursor-pointer" />
//             <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow-md rounded-md border border-gray-200 py-2 w-32 z-50 text-sm">
//               <li
//                 onClick={() => navigate("/my-orders")}
//                 className="p-2 cursor-pointer hover:bg-gray-100"
//               >
//                 My Orders
//               </li>
//               <li
//                 onClick={() => setUser(null)}
//                 className="p-2 cursor-pointer hover:bg-gray-100"
//               >
//                 Logout
//               </li>
//             </ul>
//           </div>
//         ) : (
//           <button
//             onClick={() => setShowUserLogin(true)}
//             className="cursor-pointer px-8 py-2 bg-pink-500 hover:bg-pink-600 transition text-white rounded-full"
//           >
//             Login
//           </button>
//         )}
//       </div>

//       {/* Mobile Menu Button */}
//       <button
//         onClick={() => setOpen(!open)}
//         aria-label="Menu"
//         className="sm:hidden"
//       >
//         <svg width="21" height="15" viewBox="0 0 21 15" fill="none">
//           <rect width="21" height="1.5" rx=".75" fill="#426287" />
//           <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
//           <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
//         </svg>
//       </button>

//       {/* Mobile Menu */}
//       <div
//         className={`${
//           open ? "flex" : "hidden"
//         } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-3 px-5 text-sm sm:hidden z-50`}
//       >
//         <Link to={"/"} className="hover:text-pink-500">
//           Home
//         </Link>
//         <Link to={"/products"} className="hover:text-pink-500">
//           All Products
//         </Link>

//         {user ? (
//           <>
//             <button
//               onClick={() => navigate("/my-orders")}
//               className="text-left w-full"
//             >
//               My Orders
//             </button>
//             <button
//               onClick={() => setUser(null)}
//               className="text-left w-full"
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <button
//             onClick={() => setShowUserLogin(true)}
//             className="mt-2 px-6 py-2 bg-pink-500 text-white rounded-full"
//           >
//             Login
//           </button>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const {
    user,
    setUser,
    navigate,
    setShowUserLogin,
    cartCount,
    searchQuery,
    setSearchQuery,
  } = useContext(AppContext);

  // ✅ FIXED search logic
  useEffect(() => {
    if (searchQuery && searchQuery.length > 0) {
      navigate("/products");
    }
  }, [searchQuery]);

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white sticky top-0 z-50">

      {/* Logo */}
      <Link to={"/"}>
        <h1 className="text-2xl font-bold text-pink-700">Grocerly</h1>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">

        <Link to={"/"} className="text-sm hover:text-pink-500">
          Home
        </Link>

        <Link to={"/products"} className="text-sm hover:text-pink-500">
          All Products
        </Link>

        {/* SEARCH (desktop) */}
        <div className="hidden lg:flex items-center gap-2 border border-gray-300 px-3 rounded-full">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            className="py-1.5 w-full bg-transparent outline-none"
            type="text"
            placeholder="Search products"
          />
        </div>

        {/* CART (desktop) */}
        <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
          <img src={assets.cart_icon} alt="cart" className="w-10 h-10" />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-pink-500 w-[18px] h-[18px] rounded-full">
            {cartCount()}
          </button>
        </div>

        {/* USER */}
        {user ? (
          <div className="relative group">
            <img src={assets.profile_icon} className="w-10 cursor-pointer" />
            <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow-md rounded-md py-2 w-32 text-sm">
              <li onClick={() => navigate("/my-orders")} className="p-2 hover:bg-gray-100 cursor-pointer">
                My Orders
              </li>
              <li onClick={() => setUser(null)} className="p-2 hover:bg-gray-100 cursor-pointer">
                Logout
              </li>
            </ul>
          </div>
        ) : (
          <button
            onClick={() => setShowUserLogin(true)}
            className="px-6 py-2 bg-pink-500 text-white rounded-full"
          >
            Login
          </button>
        )}
      </div>

      {/* MOBILE BUTTON */}
      <button onClick={() => setOpen(!open)} className="sm:hidden">
        ☰
      </button>

      {/* MOBILE MENU */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col gap-4 px-5 sm:hidden z-50`}
      >

        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>All Products</Link>

        {/* ✅ SEARCH (mobile added) */}
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2 rounded w-full"
          type="text"
          placeholder="Search products"
        />

        {/* ✅ CART (mobile added) */}
        <button onClick={() => navigate("/cart")} className="text-left">
          🛒 Cart ({cartCount()})
        </button>

        {user ? (
          <>
            <button onClick={() => navigate("/my-orders")}>
              My Orders
            </button>

            <button onClick={() => setUser(null)}>
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => setShowUserLogin(true)}
            className="px-6 py-2 bg-pink-500 text-white rounded-full"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;