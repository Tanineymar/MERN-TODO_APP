import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true , "Name is required."]
    },
    email:{
        type:String,
        required:[true , "Email address is required. "],
        unique:[true , "Email already exists."],
        trim:true,
        lowercase:true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/  , 'Please fill a valid email address.']

    },
    password:{
        type:String,
        required:[true , "Password is required."],
        minlength:[ 6  , "Password should contain more than 6 character."],
        select:false
    }
}
,{timestamps:true}
)



userSchema.pre("save" , async function() {
    if(!this.isModified("password")){
        return
    }
    const hash = await bcrypt.hash(this.password , 10)
    this.password = hash
    return 
})

userSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password , this.password)
}



const userModel = mongoose.model("User" , userSchema)
export default userModel