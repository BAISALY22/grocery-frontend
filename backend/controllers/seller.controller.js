import jwt from "jsonwebtoken";

//seller login : /api/seller/login

export const sellerLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.SELLER_EMAIL &&
      password === process.env.SELLER_PASSWORD
    ) {
      const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

     res.cookie("sellerToken", token, {
  httpOnly: true,
  secure: true,        // ❗ MUST BE TRUE ON RENDER + VERCEL
  sameSite: "none",    // ❗ REQUIRED FOR CROSS DOMAIN
  maxAge: 7 * 24 * 60 * 60 * 1000,
  path: "/",
});
      res.status(200).json({
        message: "login successfull",
        success: true,
      });
    }
  } catch (error) {
    console.error("error in seller login", error);
    res.status(500).json({ message: error.message });
  }
};

//seller logout : /api/seller/logout
// export const sellerLogout = async(req,res)=>{
//     try {
//         res.clearCookie("sellerToken", {
//             httpOnly: true,
//             secure: process.env.NODE_ENV === "production" ? "none" : "strict",
//         })
//         res.status(200).json({
//             message: "logout successfull", success: true
//         })
//     } catch (error) {
//         console.error("error in seller logout", error)
//         res.status(500).json({message: error.message})
//     }
// }

export const sellerLogout = async (req, res) => {
  try {
    res.clearCookie("sellerToken", {
      httpOnly: true,
      secure: false, // ✅ SAME as login
      sameSite: "lax",
      path: "/",
      expires: new Date(0), 
    });

    res.status(200).json({
      message: "logout successful",
      success: true,
    });
  } catch (error) {
    console.error("error in seller logout", error);
    res.status(500).json({ message: error.message });
  }
};

//check seller auth : /api/seller/auth
// export const isAuthSeller = async(req,res)=>{
//     try {
//         res.status(200).json({message: "seller is authenticated", success: true})
//     } catch (error) {
//         console.error("error in checking seller auth", error)
//         res.status(500).json({message: error.message})
//     }
// }

export const isAuthSeller = async (req, res) => {
  console.log("COOKIE:", req.cookies);
  try {
    const { sellerToken } = req.cookies;

    if (!sellerToken) {
      return res.status(200).json({
        success: false,
      });
    }

    const decoded = jwt.verify(sellerToken, process.env.JWT_SECRET);

    if (decoded.email !== process.env.SELLER_EMAIL) {
      return res.status(200).json({
        success: false,
      });
    }

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    return res.status(200).json({
      success: false,
    });
  }
};
