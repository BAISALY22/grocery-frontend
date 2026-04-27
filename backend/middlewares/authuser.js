import jwt from "jsonwebtoken"

export const authUser = (req, res, next) => {
    try {
        const { token } = req.cookies;

        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded.id;   // ✅ FIX

        next();

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};