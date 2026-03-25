

import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser"
import authRouter from './routes/auth.routes.js'
import todoRouter from './routes/todo.routes.js'
import path from 'path'

const app = express()

// console.log("CORS origin set to:", process.env.FRONTEND_URL)

// app.use(cors({
//     origin: process.env.FRONTEND_URL,
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE" ,"PATCH"],
//     allowedHeaders: ["Content-Type", "Authorization"]
// }))

app.use(express.json())
app.use(cookieParser())


// routes
app.use("/api/auth", authRouter)
app.use("/todo", todoRouter)

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1,'..', "frontend", "dist")));
  app.get(/.*/, (_, res) => {
    res.sendFile(path.resolve(__dirname1, '..', "frontend", "dist", "index.html"));
  });
} else {
  app.get("/", (_, res) => {
    res.send("App is under development!");
  });
}


export default app