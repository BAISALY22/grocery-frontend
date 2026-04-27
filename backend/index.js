import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import { connectDB } from './config/connectDB.js'
import dns from "dns"

dns.setDefaultResultOrder("ipv4first")

dotenv.config()

import userRoutes from './routes/user.routes.js'
import sellerRoutes from './routes/seller.routes.js'
import productRoutes from './routes/product.routes.js'
import cartRoutes from './routes/cart.routes.js'
import orderRoutes from './routes/order.routes.js'
import addressRoutes from './routes/address.routes.js'


const app = express()

// DB 
connectDB()

// allowed origins
const allowedOrigins = [
  "http://localhost:5173",
  "https://grocery-frontend-xi.vercel.app"
]

// middleware
app.use(express.json())

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}))

// ❌ IMPORTANT: DO NOT use app.options("/*")
// app.options("/*", cors())  ← REMOVE THIS COMPLETELY

app.use(cookieParser())

// static files
app.use("/images", express.static("uploads"))

// API routes
app.use('/api/user', userRoutes)
app.use('/api/seller', sellerRoutes)
app.use('/api/product', productRoutes)
app.use('/api/cart', cartRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/address', addressRoutes)

// health check (VERY useful for Render debugging)
app.get("/", (req, res) => {
  res.send("Backend is running 🚀")
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})