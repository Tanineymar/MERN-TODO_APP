import express from 'express'
import createTodo from '../controllers/todo.controller.js'
import verifyToken from '../middlewares/auth.middleware.js'

const router = express.Router()

router.post("/todo" , verifyToken ,createTodo)

export default router