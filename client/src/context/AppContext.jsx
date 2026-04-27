import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const AppContext = createContext(null);
// import { dummyProducts } from "../assets/assets";
import { useEffect } from "react";
import toast from "react-hot-toast";

import axios from "axios"
axios.defaults.withCredentials = true
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

// axios.defaults.baseURL = "http://localhost:5000";


const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(null);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState({});



  const fetchSeller = async () => {
  try {
    const { data } = await axios.get("/api/seller/is-auth",{withCredentials: true}
    );
    setIsSeller(data.success);
  } catch (error) {
    setIsSeller(false);
  }
};

//check user login status

const fetchUser = async () => {
  try {
    
    const { data } = await axios.get("/api/user/is-auth",{withCredentials: true});
    if(data.success){
      setUser(data.user)
    }else{
      setUser(null); 
    }
  } catch (error) {
    setUser(null);
    
  }
}

  //fetch all products data
  const fetchProducts = async () => {
    // setProducts(dummyProducts);
    try {
      const { data } = await axios.get("/api/product/list")
      if(data.success){
        setProducts(data.products)
      }
      else{
        toast.error(data.message)
      }
      
    } catch (error) {
       toast.error(error.message)
    }
  };

  //add to cart

  const addToCart = (itemId) => {
    let cartData = structuredClone(cartItems ||{});
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
    toast.success("Item added to cart");
  };

  //update cart items quantity

  const updateCartItem = (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    setCartItems(cartData);
    toast.success("Cart updated");
  };

  //total cart items
  const cartCount = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      totalCount += cartItems[item];
    }
    return totalCount;
  };

  // total cart amount

  // const totalCartAmount = () => {
  //   let totalAmount = 0;
  //   for (const items in cartItems) {
  //     let iteminfo = products.find((product) => product._id === items);
  //     if (cartItems[items] > 0) {
  //       totalAmount += cartItems[items] * iteminfo.offerPrice;
  //     }
  //   }
  //   return Math.floor(totalAmount * 100) / 100;
  // };


const totalCartAmount = () => {
  let totalAmount = 0;

  for (const items in cartItems) {
    let iteminfo = products.find((product) => product._id === items);

   if (iteminfo?.offerPrice && cartItems[items] > 0) {
      totalAmount += cartItems[items] * iteminfo.offerPrice;
    }
  }

  return Math.floor(totalAmount * 100) / 100;
};


  // remove from cart

  const removeFromCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] -= 1;
      if (cartData[itemId] === 0) {
        delete cartData[itemId];
      }
      toast.success("Item removed from cart");
      setCartItems(cartData);
    }
  };

  // useEffect(() => {
  //   const updateCart = async () => {
  //     try {
  //       const { data }= await axios.post("/api/cart/update", { cartItems })
  //       if(!data.success){
  //         toast.error(data.message)
  //       }
  //     } catch (error) {
  //       toast.error("Failed to update cart");
  //     }
  //   }
  //   if (user) {
  //     updateCart();
  //   }
  // }, [cartItems]);


useEffect(() => {
  const updateCart = async () => {
    try {
      const { data } = await axios.post("/api/cart/update", { cartItems });
      if (!data.success) {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Failed to update cart");
    }
  };

  if (user) {
    updateCart();
  }
}, [cartItems, user]);   // ✅ FIXED


  useEffect(() => {
    fetchSeller()
    fetchProducts()
    fetchUser()
  }, []);

  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    fetchSeller,
    showUserLogin,
    setShowUserLogin,
    products,
    setProducts,
    addToCart,
    updateCartItem,
    cartCount,
    totalCartAmount,
    removeFromCart,
    setCartItems,
    cartItems,
    searchQuery,
    setSearchQuery,
    axios,
    fetchProducts,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
