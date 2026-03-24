import userModel from '../models/user.model.js'
import jwt from 'jsonwebtoken'



async function userRegisterController(req, res) {
    const { name, email, password } = req.body

    const isUserExist = await userModel.findOne({
        email: email
    })

    if (isUserExist) {
        return res.status(422).json({
            message: "User already exists with this email.",
            status: "failed"
        })
    }

    const user = await userModel.create({
        name, email, password
    })

    const token = jwt.sign({ userId: user._id  , name:user.name}, process.env.JWT_SECRET, { expiresIn: "10d" })

    res.cookie("token", token, {
        httpOnly: true,
        sameSite: "lax",
        secure: false
    })

    res.status(201).json({
        message: "Registered successfully",
        token,
        user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password
        }

    })
}


async function userLoginController(req, res) {
    const { email, password } = req.body

    const user = await userModel.findOne({ email }).select("+password")

    if (!user) {
        return res.status(401).json({
            message: "Email or password is invalid."
        })
    }

    const isvalidPassword = await user.comparePassword(password)

    if (!isvalidPassword) {
        return res.status(401).json({
            message: "Email or password is invalid."
        })
    }

    const token = jwt.sign({ userId: user._id , name: user.name }, process.env.JWT_SECRET, { expiresIn: "10d" })


    res.cookie("token", token, {
        httpOnly: true,        
        secure: false,        
        sameSite: "lax",       
        maxAge: 10 * 24 * 60 * 60 * 1000  
    })

    res.status(200).json({
        message: "Login successful",
        token,
        user: {
            _id: user._id,
            name: user.name,
            email: user.email,
        }
    })
}
export default { userRegisterController, userLoginController }