import Product from "../models/product.model.js";



export const addProduct = async (req, res) => {
  try {
    const { name, description, price, offerPrice, category, image } = req.body;

    // ✅ validation FIXED for URL system
    if (
      !name ||
      !description ||
      price === undefined ||
      offerPrice === undefined ||
      !category ||
      !image
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields including image URL are required",
      });
    }

    await Product.create({
      name,
      description,
      price,
      offerPrice,
      category,
      image, // ✅ now STRING, not array
    });

    res.status(201).json({
      message: "product added successfully",
      success: true,
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

//GET PRODUCTS: /api/product/get

export const getProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ products, success: true });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

//GET SINGLE PRODUCTS: /api/product/id

// export const getProductById = async (req, res) => {
//   try {
//     const { id } = req.body;
//     const product = await Product.findById(id);
//     if (!product) {
//       return res
//         .status(404)
//         .json({ message: "product not found", success: false });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };


export const getProductById = async (req, res) => {
  try {
    const { id } = req.body;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        message: "product not found",
        success: false
      });
    }

    return res.status(200).json({
      product,
      success: true
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};


//CHANGE STOCK : /api/product/stock

export const changeStock = async (req, res) => {
  try {
    const { id, inStock } = req.body;
    const product = await Product.findByIdAndUpdate(
      id,
      { inStock },
      { new: true },
    );
    if (!product) {
      return res
        .status(404)
        .json({ message: "product not found", success: false });
    }
    res
      .status(200)
      .json({ product, message: "Stock updated successfully", success: true });
  } catch (error) {
  console.log("ERROR FULL:", error); // 👈 add this
  res.status(500).json({
    message: "Server error",
    error: error.message,
  });
  }
};
