import dotenv from 'dotenv'
dotenv.config() 

import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser"
import authRouter from './routes/auth.routes.js'
import todoRouter from './routes/todo.routes.js'

const app = express()

console.log("CORS origin set to:", process.env.FRONTEND_URL)

// ✅ CORS must be FIRST — before any routes or other middleware
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))

app.use(express.json())
app.use(cookieParser())


// routes
app.use("/api/auth", authRouter)
app.use("/todo", todoRouter)

export default app