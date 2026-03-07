import userModel from '../models/user.model.js'
import jwt from 'jsonwebtoken'



async function userRegisterController(req,  res){
    const{name , email , password} = req.body

    const isExist = await userModel.findOne({
        email : email
    })

    if(isExist){
        return res.status(422).json({
            message:"User already exists with this email.",
            status:"failed"
        })
    }

    const user = await userModel.create({
        name , email , password
    })

    const token = jwt.sign({userId :  user._id}, process.env.JWT_SECRET ,{expiresIn:"3d" })
     
    res.cookie("token" ,token)

    res.status(201).json({
        message:"User registred successfully",
        user:{
            _id:user._id,
            email:user.email,
            password:user.password
        }

    })
}

export default {userRegisterController}