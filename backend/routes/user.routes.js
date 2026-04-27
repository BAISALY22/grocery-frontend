import express from "express";
import { registerUser } from "../controllers/user.controller.js";
import {
  loginUser,
  logoutUser,
  isAuthUser,
} from "../controllers/user.controller.js";
import { authUser } from "../middlewares/authuser.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", authUser, logoutUser);
router.get("/is-auth", authUser, isAuthUser);

export default router;
