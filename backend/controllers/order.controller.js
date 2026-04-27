import Order from "../models/order.model.js";
import Product from "../models/product.model.js";


// ==============================
// PLACE ORDER (COD)
// ==============================
export const placeOrderCOD = async (req, res) => {
  try {
    const userId = req.user;
    const { items, address } = req.body;

    // validation
    if (!items || !address) {
      return res.status(400).json({
        success: false,
        message: "Items and address are required",
      });
    }

    // calculate total amount
    let amount = 0;

    for (const item of items) {
      const productData = await Product.findById(item.product);

      // safety check
      if (!productData) {
        return res.status(404).json({
          success: false,
          message: "Product not found",
        });
      }

      amount += productData.offerPrice * item.quantity;
    }

    // add 2% tax
    amount += Math.floor((amount * 2) / 100);

    // create order
    await Order.create({
      userId,
      items,
      address,
      amount,
      paymentType: "COD",
      isPaid: false,
    });

    return res.status(201).json({
      success: true,
      message: "Order placed successfully",
    });

  } catch (error) {
    console.error("🔥 ORDER ERROR:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// ==============================
// GET USER ORDERS
// ==============================
export const getUserOrders = async (req, res) => {
  try {
    const userId = req.user;

    const orders = await Order.find({
      userId,
      $or: [{ paymentType: "COD" }, { isPaid: false }],
    })
      .populate("items.product address")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      orders,
    });

  } catch (error) {
    console.error("Error fetching user order:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


// ==============================
// GET ALL ORDERS (ADMIN)
// ==============================
// export const getAllOrders = async (req, res) => {
//   try {
//     const orders = await Order.find({
//       $or: [{ paymentType: "COD" }, { isPaid: true }],
//     })
//       .populate("items.product address")
//       .sort({ createdAt: -1 });

//     res.status(200).json({
//       success: true,
//       orders,
//     });

//   } catch (error) {
//     console.error("Error fetching all orders:", error);
//     res.status(500).json({
//       success: false,
//       message: "Internal server error",
//     });
//   }
// };


export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      $or: [{ paymentType: "COD" }, { isPaid: true }],
    })
      .populate("items.product address")
      .sort({ createdAt: -1 });

    // ✅ REMOVE NULL PRODUCTS
    const cleanedOrders = orders.map(order => {
      const filteredItems = order.items.filter(
        item => item.product !== null
      );

      return {
        ...order._doc,
        items: filteredItems
      };
    });

    res.status(200).json({
      success: true,
      orders: cleanedOrders,
    });

  } catch (error) {
    console.error("Error fetching all orders:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};




