import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser"
import authRouter from './routes/auth.routes.js'
import todoRouter from './routes/todo.routes.js'

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())


app.use("/api/auth" , authRouter)
app.use("/todo" , todoRouter)

export default app