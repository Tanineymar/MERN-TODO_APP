import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser"
import authRouter from './routes/auth.routes.js'


const app = express()

app.use(express.json())
app.use(cookieParser())

app.get("/ping" , (req ,res)=>{
    res.send("PONG")
})


app.use(cors())

app.use("/api/auth" , authRouter)

export default app