
import React, { useContext } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Cart from "./pages/Cart.jsx";
import MyOrders from "./pages/MyOrders.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Auth from "./models/Auth.jsx";
import ProductCategory from "./pages/ProductCategory.jsx";
import AddAddress from "./pages/AddAddress.jsx";

import SellerLayout from "./pages/seller/SellerLayout.jsx";
import SellerLogin from "./components/seller/SellerLogin.jsx";
import AddProduct from "./pages/seller/AddProduct.jsx";
import ProductList from "./pages/seller/ProductList.jsx";
import Orders from "./pages/seller/Orders.jsx";

import { AppContext } from "./context/AppContext";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { isSeller, showUserLogin } = useContext(AppContext);
  const isSellerPath = useLocation().pathname.includes("seller");

  return (
    <div className="text-default min-h-screen">
      
      {/* Navbar (hide in seller panel) */}
      {!isSellerPath && <Navbar />}

      {/* User Login Modal */}
      {showUserLogin && <Auth />}

      <Toaster />

      <div className="px-6 md:px-16 lg:px-24 xl:px-32">
        <Routes>

          {/* User Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/product/:category/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/add-address" element={<AddAddress />} />

          {/* Seller Routes */}
          <Route path="/seller" element={<SellerLayout />}>

            {/* Default Seller Page */}
            <Route
              index
              element={
                isSeller
                  ? <AddProduct />
                  : <Navigate to="/seller/login" />
              }
            />

            {/* Seller Login */}
            <Route
              path="login"
              element={
                !isSeller
                  ? <SellerLogin />
                  : <Navigate to="/seller" />
              }
            />

            {/* Product List */}
            <Route
              path="product-list"
              element={
                isSeller
                  ? <ProductList />
                  : <Navigate to="/seller/login" />
              }
            />

            {/* Orders */}
            <Route
              path="orders"
              element={
                isSeller
                  ? <Orders />
                  : <Navigate to="/seller/login" />
              }
            />

          </Route>

        </Routes>
      </div>

      {/* Footer (hide in seller panel) */}
      {!isSellerPath && <Footer />}
    </div>
  );
};

export default App;
