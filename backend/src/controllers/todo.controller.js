import todoModel  from '../models/todo.model.js'
import jwt from 'jsonwebtoken'




async function createTodo(req, res) {

    const { title, description, completed = false } = req.body
  
    try {

        const Todo = await todoModel.create({
            title,
            description,
            completed,
            user: req.user._id
        })

        res.status(201).json({
            message: "Todo created successfully",
            todo: {
                title: Todo.title,
                description: Todo.description,
                completed: Todo.completed,
                id: Todo._id
            }
        })
    } catch (error) {

        console.log("ERROR", error);
        res.status(500).json({
            message: "Error in create Todo",
            error
        })

    }
}




async function fetchTodo(req , res) {

    try {

        const todos =   await todoModel.find({
            user : req.user._id
        })
       
        res.status(200).json({
            message:"Data fetched successfully",
            todos 
        })

    } catch (error) {
        res.status(500).json({
            message:"Error fetching data",
            error
        })
    }
}


async function deleteTodo(req ,res) {
    const id = req.params.id

   try {
     await todoModel.findByIdAndDelete({
        _id: id
    })

    res.status(200).json({
        message:"Todo deleted successfully"
    })
   } catch (error) {
    res.status(500).json({
        message:"Error to delete todo",
        error
    })
   }


}


async function updateTodo(req, res){
    const id = req.params.id
    
    try {
        const title  = req.body.title
        const description = req.body.description
        

        await todoModel.findByIdAndUpdate({_id:id},
            {
                title:title,
                description:description
            })

      res.status(200).json({
        message:"Data updated successfully"
      })
    } catch (error) {
        res.status(500).json({
            message:"Error to update data",
            error
        })
    }
}

export default {createTodo ,fetchTodo , deleteTodo, updateTodo}