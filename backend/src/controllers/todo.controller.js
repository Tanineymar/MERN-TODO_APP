import todoModel from '../models/todo.model.js'

async function createTodo(req, res){

    const {title , description , completed = false} = req.body

    try {
        
      const Todo =  await todoModel.create({
        title:title,
        description:description,
        completed:completed,
        user:req.user._id
    })

    res.status(201).json({
        message:"Todo created successfully",
        todo:{
            title:Todo.title,
            description:Todo.description,
            completed:Todo.completed,
            id:user._id
        }
    })
    } catch (error) {
        res.status(500).json({
            message:"Error in create Todo",
           error
        })
        
    }
}

export default createTodo