import express, { Router } from "express"
import { authUser } from "../middlewares/authuser.js"
import { getAllOrders, getUserOrders, placeOrderCOD } from "../controllers/order.controller.js"
import { authSeller } from "../middlewares/authseller.js"


const router = express.Router()

router.post("/cod", authUser, placeOrderCOD)
router.get("/user", authUser, getUserOrders)
router.get("/seller", authSeller, getAllOrders)

export default router