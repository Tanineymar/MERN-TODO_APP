import {  useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
function Login(){

    const navigate = useNavigate()

    const [email , setEmail]=useState("")
    const [password ,setPassword]=useState("")

    const hadleLogin = async (event) => {
        event.preventDefault();

        try {
            const {data} = await axios.post("http://localhost:3000/api/auth/login",{
                email,
                password
            },{
                withCredentials:true,
                headers:{
                    "Content-type":"application/json"
                }
            })
            console.log(data)
            alert("User login successfully")
            localStorage.setItem("token" , data.token)
            navigate("/home")
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div>
            <div>
                <h1>Login PAGE</h1>
            </div>
            <div>
                <form onSubmit={hadleLogin} method="post">
                    <div>
                        <label htmlFor="email" >Email</label>
                        <input type="email" onChange={(event)=>setEmail(event.target.value)} id="email" placeholder="Enter email" value={email} />
                    </div>
                    <div>
                        <label htmlFor="password" >Password</label>
                        <input type="password"onChange={(event)=>setPassword(event.target.value)} id="password" placeholder="Enter password" value={password} />
                    </div>
                    <button type="Submit">Login</button>
                    <p>
                      Don't have an account? <Link to='/register'>Register</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
export default Login