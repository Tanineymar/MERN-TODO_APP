import express from 'express'
import todoController from '../controllers/todo.controller.js'
import verifyToken from '../middlewares/auth.middleware.js'

const router = express.Router()

// CREATE API
router.post("/create" , verifyToken ,todoController.createTodo)

// READ API
router.get("/home" ,verifyToken ,todoController.fetchTodo )

// UPDATE API
router.put("/update/:id" ,verifyToken, todoController.updateTodo)

// DELETE API
router.delete("/delete/:id" ,verifyToken,todoController.deleteTodo)

export default router