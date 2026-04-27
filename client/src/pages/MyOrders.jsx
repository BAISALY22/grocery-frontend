import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { axios, user } = useContext(AppContext);

  const fetchOrders = async () => {
    try {
      const { data } = await axios.get("/api/order/user");

      if (data.success) {
        setMyOrders(data.orders);
      } else {
        toast.error(data.message || "Failed to fetch orders");
      }
    } catch (error) {
      toast.error(error.message || "Failed to fetch orders");
    }
  };

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);

  return (
    <div className="mt-12 pb-12">
      <div>
        <p className="text-2xl font-medium md:text-3xl">My Orders</p>
      </div>

      {myOrders.map((order, index) => (
        <div
          key={index}
          className="my-8 border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-4xl"
        >
          <p className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-6 text-sm md:text-base">
            <span className="font-medium">Order ID: {order._id}</span>
            <span className="font-medium">Payment: {order.paymentType}</span>
            <span className="font-medium">Total Amount: {order.amount}</span>
          </p>

          {order.items.map((item, i) => (
            <div
              key={i}
              className={`relative bg-white text-gray-800/70 ${
                order.items.length !== i + 1 ? "border-b" : ""
              } border-gray-300 flex flex-col md:flex-row md:items-center justify-between p-4 py-5 w-full max-w-4xl`}
            >
              <div className="flex items-center mb-4 md:mb-0">

                {/* IMAGE */}
                <div className="p-4 rounded-lg">
                  <img
                    src={
                      Array.isArray(item.product?.image)
                        ? item.product.image[0]
                        : item.product?.image || "https://via.placeholder.com/80"
                    }
                    alt={item.product?.name || "product"}
                    className="w-16 h-16 object-cover"
                  />
                </div>

                {/* DETAILS */}
                <div className="ml-4">
                  <h2 className="text-xl font-medium">
                    {item.product?.name}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {item.product?.category}
                  </p>
                </div>

              </div>

              {/* RIGHT SIDE */}
              <div className="text-lg font-medium">
                <p>Quantity: {item.quantity || 1}</p>
                <p>Status: {order.status}</p>
                <p>
                  Date: {new Date(order.createdAt).toLocaleString()}
                </p>
              </div>

              <p className="text-base md:text-lg font-medium whitespace-nowrap">
                Amount: $
                {(item.product?.offerPrice || 0) * (item.quantity || 1)}
              </p>

            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MyOrders;