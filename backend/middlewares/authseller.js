// import jwt from "jsonwebtoken"

// export const authSeller = (req, res, next) => {
    
//         const { sellertoken } = req.cookies;

//         if (!sellertoken) {
//             return res.status(401).json({ message: "Unauthorized", success: false });
//         }
//     try {
//         const decoded = jwt.verify(sellertoken, process.env.JWT_SECRET);

//         if (decoded.email === process.env.SELLER_EMAIL) {
//                 next();
//         }

//  else {
//       return res.status(403).json({ message: "Forbidden", success: false });
//     }

//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: error.message });
//     }
// };



import jwt from "jsonwebtoken";

export const authSeller = (req, res, next) => {
  console.log("SELLER COOKIE:", req.cookies);
  try {
    const { sellerToken } = req.cookies;

    if (!sellerToken) {
      return res.status(401).json({
        message: "Unauthorized - No Token",
        success: false,
      });
    }

    const decoded = jwt.verify(sellerToken, process.env.JWT_SECRET);

    if (decoded.email === process.env.SELLER_EMAIL) {
      return next(); // ✅ always return
    } else {
      return res.status(403).json({
        message: "Forbidden - Not Seller",
        success: false,
      });
    }

  } catch (error) {
    console.log(error);
    return res.status(401).json({   // ✅ better than 500
      message: "Invalid or Expired Token",
      success: false,
    });
  }
};