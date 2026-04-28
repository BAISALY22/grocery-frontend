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

//   // ✅ FIXED search logic
//   useEffect(() => {
//     if (searchQuery && searchQuery.length > 0) {
//       navigate("/products");
//     }
//   }, [searchQuery]);

//   const handleNavClick = (path) => {
//   navigate(path);
//   setOpen(false); // ✅ close menu
// };

//   return (
//     <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white sticky top-0 z-50">

//       {/* Logo */}
//       <Link to={"/"}>
//         <h1 className="text-2xl font-bold text-pink-700">Grocerly</h1>
//       </Link>

//       {/* Desktop Menu */}
//       <div className="hidden sm:flex items-center gap-8">

//         <Link to={"/"} className="text-sm hover:text-pink-500">
//           Home
//         </Link>

//         <Link to={"/products"} className="text-sm hover:text-pink-500">
//           All Products
//         </Link>

//         {/* SEARCH (desktop) */}
//         <div className="hidden lg:flex items-center gap-2 border border-gray-300 px-3 rounded-full">
//           <input
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="py-1.5 w-full bg-transparent outline-none"
//             type="text"
//             placeholder="Search products"
//           />
//         </div>

//         {/* CART (desktop) */}
//         <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
//           <img src={assets.cart_icon} alt="cart" className="w-10 h-10" />
//           <button className="absolute -top-2 -right-3 text-xs text-white bg-pink-500 w-[18px] h-[18px] rounded-full">
//             {cartCount()}
//           </button>
//         </div>

//         {/* USER */}
//         {user ? (
//           <div className="relative group">
//             <img src={assets.profile_icon} className="w-10 cursor-pointer" />
//             <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow-md rounded-md py-2 w-32 text-sm">
//               <li onClick={() => navigate("/my-orders")} className="p-2 hover:bg-gray-100 cursor-pointer">
//                 My Orders
//               </li>
//               <li onClick={() => setUser(null)} className="p-2 hover:bg-gray-100 cursor-pointer">
//                 Logout
//               </li>
//             </ul>
//           </div>
//         ) : (
//           <button
//             onClick={() => setShowUserLogin(true)}
//             className="px-6 py-2 bg-pink-500 text-white rounded-full"
//           >
//             Login
//           </button>
//         )}
//       </div>

//       {/* MOBILE BUTTON */}
//       <button onClick={() => setOpen(!open)} className="sm:hidden">
//         ☰
//       </button>

//       {/* MOBILE MENU */}
//       <div
//         className={`${
//           open ? "flex" : "hidden"
//         } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col gap-4 px-5 sm:hidden z-50`}
//       >

//         <Link to={"/"}>Home</Link>
//         <Link to={"/products"}>All Products</Link>

//         {/* ✅ SEARCH (mobile added) */}
//         <input
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="border p-2 rounded w-full"
//           type="text"
//           placeholder="Search products"
//         />

//         {/* ✅ CART (mobile added) */}
//         <button onClick={() => navigate("/cart")} className="text-left">
//           🛒 Cart ({cartCount()})
//         </button>

//         {user ? (
//           <>
//             <button onClick={() => navigate("/my-orders")}>
//               My Orders
//             </button>

//             <button onClick={() => setUser(null)}>
//               Logout
//             </button>
//           </>
//         ) : (
//           <button
//             onClick={() => setShowUserLogin(true)}
//             className="px-6 py-2 bg-pink-500 text-white rounded-full"
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

  // ✅ Search redirect
  useEffect(() => {
    if (searchQuery && searchQuery.length > 0) {
      navigate("/products");
    }
  }, [searchQuery]);

  // ✅ FIX: close menu on click
  const handleNavClick = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white sticky top-0 z-50">

      {/* LOGO */}
      <h1
        onClick={() => handleNavClick("/")}
        className="text-2xl font-bold text-pink-700 cursor-pointer"
      >
        Grocerly
      </h1>

      {/* DESKTOP */}
      <div className="hidden sm:flex items-center gap-8">

        <button onClick={() => navigate("/")} className="text-sm hover:text-pink-500">
          Home
        </button>

        <button onClick={() => navigate("/products")} className="text-sm hover:text-pink-500">
          All Products
        </button>

        {/* SEARCH */}
        <div className="hidden lg:flex items-center gap-2 border border-gray-300 px-3 rounded-full">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            className="py-1.5 w-full bg-transparent outline-none"
            type="text"
            placeholder="Search products"
          />
        </div>

        {/* CART */}
        <div
          onClick={() => navigate("/cart")}
          className="relative cursor-pointer"
        >
          <img src={assets.cart_icon} alt="cart" className="w-10 h-10" />
          <span className="absolute -top-2 -right-3 text-xs text-white bg-pink-500 w-[18px] h-[18px] rounded-full flex items-center justify-center">
            {cartCount()}
          </span>
        </div>

        {/* USER */}
        {user ? (
          <div className="relative group">
            <img src={assets.profile_icon} className="w-10 cursor-pointer" />
            <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow-md rounded-md py-2 w-32 text-sm">
              <li
                onClick={() => navigate("/my-orders")}
                className="p-2 hover:bg-gray-100 cursor-pointer"
              >
                My Orders
              </li>
              <li
                onClick={() => setUser(null)}
                className="p-2 hover:bg-gray-100 cursor-pointer"
              >
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
      <button onClick={() => setOpen(!open)} className="sm:hidden text-2xl">
        ☰
      </button>

      {/* MOBILE MENU */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col gap-4 px-5 sm:hidden z-50`}
      >

        <button onClick={() => handleNavClick("/")}>
          Home
        </button>

        <button onClick={() => handleNavClick("/products")}>
          All Products
        </button>

        {/* SEARCH */}
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2 rounded w-full"
          type="text"
          placeholder="Search products"
        />

        {/* CART */}
        <button onClick={() => handleNavClick("/cart")} className="text-left">
          🛒 Cart ({cartCount()})
        </button>

        {user ? (
          <>
            <button onClick={() => handleNavClick("/my-orders")}>
              My Orders
            </button>

            <button
              onClick={() => {
                setUser(null);
                setOpen(false); // ✅ close menu on logout too
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => {
              setShowUserLogin(true);
              setOpen(false); // ✅ close menu
            }}
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