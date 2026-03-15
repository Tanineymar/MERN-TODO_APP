import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'

function Register(){
    const navigate = useNavigate()

    const[name , setName]=useState("")
    const[email , setEmail]=useState("")
    const[password ,setPassword]=useState("")

    const handleRegister = async(event)=>{
        event.preventDefault();
        try {
            const {data} = await axios.post("http://localhost:3000/api/auth/register" , {
                name,
                email,
                password,
            },{
                withCredentials : true,
                headers:{
                    "Content-type":"application/json"
                }
            })
            console.log(data)
            alert("User registered successfully")
            localStorage.setItem("token", data.token)
            navigate("/login")
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div>
            <div>
                <h2>Register</h2>
            </div>
            <div>
                <form onSubmit={handleRegister} method="post">
                    <div>
                        <label htmlFor="Username" >Username</label>
                        <input onChange={(event)=>setName(event.target.value)} value={name} id="Username" type="text" placeholder="Enter name" />
                    </div>
                    <div>
                        <label htmlFor="Email" >Email</label>
                        <input onChange={(event)=>setEmail(event.target.value)} value={email} id="Email" type="email" placeholder="Enter email" />
                    </div>
                    <div>
                        <label htmlFor="Password" >Password</label>
                        <input onChange={(event)=>setPassword(event.target.value)} value={password} id="Password" type="password" placeholder="Min. 6 Characters" />
                    </div>
                    <button type="submit">Create account</button>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </form>
            </div>
        </div>
    )
}
export default Register