import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import Logo from "../assets/Logo"
import toast from "react-hot-toast"

function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const hadleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/api/auth/login", {
                email,
                password
            }, {
                withCredentials: true,
                headers: {
                    "Content-type": "application/json"
                }
            })
            toast.success(response.data.message)
            localStorage.setItem("token", response.data.token)
            setEmail("");
            setPassword("")
            navigate("/home")
        } catch (error) {
           if (error.response?.data?.errors) {
            toast.error(error.response.data.errors[0].msg)
           } else {
            toast.error(error.response?.data?.message || "login failed")
           }
        }
    }

    return (
        <div className="flex min-h-screen">
            {/* Left side */}

            <div className=" hidden lg:flex w-1/2 bg-linear-to-br from-violet-900 to-indigo-600 text-white p-16 flex-col justify-center">
                  <div className="mb-3">
                        <Logo dark={true} width={200}/>
                    </div>

                <h1 className="text-5xl font-serif leading-relaxed">
                    Welcome back,<br />
                    <span className="italic text-fuchsia-300">stay productive.</span>
                </h1>
                <p className="mt-6 text-gray-300 max-w-md">
                    Login to manage your tasks and stay organized everyday.
                </p>
            </div>

            {/* right side */}
            <div className="flex w-full lg:w-1/2 items-center justify-center text-white bg-black p-8">
                <div className="w-full max-w-md bg-gray-900 px-8 py-10 rounded-2xl" >
                    <div className="mb-3">
                        <Logo dark={true} width={150}/>
                    </div>
                    <h2 className="text-4xl font-serif mb-2">Login account</h2>
                    <p className="text-gray-400 mb-8">Don't have an account?
                        <Link to='/register' className="text-indigo-400 ml-2">Register</Link>
                    </p>
                    <form onSubmit={hadleLogin} method="post" className="space-y-5">
                        <div>
                            <label htmlFor="email" >Email</label>
                            <input className="w-full p-3 mt-1.5 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-indigo-500"
                             type="email" onChange={(event) => setEmail(event.target.value)} id="email" placeholder="Enter email" value={email} />
                        </div>
                        <div>
                            <label htmlFor="password" >Password</label>
                            <input className="w-full p-3 mt-1.5 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-indigo-500"
                             type="password" onChange={(event) => setPassword(event.target.value)} id="password" placeholder="Enter password" value={password} />
                        </div>
                        <button type="Submit" className="w-full p-3 bg-indigo-600 hover:bg-indigo-800 transition rounded-md font-semibold"
                        >Login</button>
                      
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login