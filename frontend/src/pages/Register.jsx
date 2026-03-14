import { useState } from "react"
import { Link } from "react-router-dom"

function Register(){
    const[username , setUsername]=useState("")
    const[email , setEmail]=useState("")
    const[password ,setPassword]=useState("")

    const handleRegister =(event)=>{
        event.preventDefault();
        try {
            
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
                        <label htmlFor="Username">Username</label>
                        <input onChange={(event)=>setUsername(event.target.value)} type="text" placeholder="Enter name" />
                    </div>
                    <div>
                        <label htmlFor="Email">Email</label>
                        <input type="email" placeholder="Enter email" />
                    </div>
                    <div>
                        <label htmlFor="Password">Password</label>
                        <input type="password" placeholder="Min. 6 Characters" />
                    </div>
                    <button>Create account</button>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </form>
            </div>
        </div>
    )
}
export default Register