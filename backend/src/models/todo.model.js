import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required."],
        trim: true,
        maxlength: [100, "Title cannot exceed 100 characters."]
    },
    description: {
        type: String,
        trim: true,
        maxlength: [500, "Description cannot exceed 500 characters."]

    },
    completed: {
        type: Boolean,
        default: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User is required."]
    }


}, { timestamps: true })



const todoModel = mongoose.model("Todo", todoSchema)



export default todoModel