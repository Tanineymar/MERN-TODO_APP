import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Eye, EyeOff } from "lucide-react"
import axios from 'axios'
import Logo from "../assets/Logo"
import toast from 'react-hot-toast'
import { useRef } from "react"
import api from '../api/axios'


function Register() {
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [showPassword, setShowPassword] = useState(false)
    const timeRef = useRef(null)

    const handlePasswordChange = (e)=>{

        setPassword(e.target.value)

        setShowPassword(true)

        if(timeRef.current){
            clearTimeout(timeRef.current)
        }

        timeRef.current = setTimeout(()=>{
            setShowPassword(false)
        },800)
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        try {
            const response = await api.post("/api/auth/register", {
                name,
                email,
                password,
            }, {
                withCredentials: true,
                headers: {
                    "Content-type": "application/json"
                }
            })
            toast.success(response.data.message)
            localStorage.setItem("token", response.data.token)
            setName("")
            setEmail("")
            setPassword("")
            navigate("/home")
        } catch (error) {
            if (error.response?.data?.errors) {
                toast.error(error.response.data.errors[0].msg)
            } else {
                toast.error(error.response?.data?.message || "Registeration failed")
            }

        }
    }

    return (
        <div className="flex min-h-screen">
            {/* Left side div*/}
            <div className="hidden lg:flex w-1/2 bg-linear-to-br from-violet-900 to-indigo-600 text-white p-16 flex-col justify-center">

                <div className="mb-8">
                    <Logo dark={true} width={200} />
                </div>

                <h1 className="text-5xl font-serif leading-relaxed">
                    Organize your tasks,<br />
                    <span className="italic text-fuchsia-300">effortlessly.</span>
                </h1>
                <p className="mt-6 text-gray-300 max-w-md">Join thousands of people who use taskly to stay productive and never miss what matters.</p>
                <ul className="mt-28 space-y-4 text-gray-300">
                    <li>• Create and manage todos instantly</li>
                    <li>• Secure authentication & data storage</li>
                    <li>• Access from any device, anytime</li>
                </ul>
            </div>

            {/* Right side div */}
            <div className="flex w-full lg:w-1/2 items-center justify-center bg-black text-white p-8" >
                < div className="w-full max-w-md bg-gray-900 px-8 py-10 rounded-2xl">
                    <Logo dark={true} width={150} />
                    <h2 className="text-4xl font-serif leading-relaxed mb-2">Create account</h2>

                    <p className="text-gray-400 mb-8 ">
                        Already have one?
                        <Link to="/login" className="text-indigo-400 ml-2">
                            Login
                        </Link>
                    </p>


                    <form onSubmit={handleRegister} method="post" className="space-y-5">
                        <div className="flex-gap-4">
                            <label htmlFor="Username">Username</label>
                            <input onChange={(event) => setName(event.target.value)} value={name} id="Username" type="text" placeholder="Enter name"
                                className="w-full p-3 mt-1.5 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-indigo-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="Email" >Email</label>
                            <input onChange={(event) => setEmail(event.target.value)} value={email} id="Email" type="email" placeholder="Enter email"
                                className="w-full p-3 mt-1.5 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-indigo-500"
                            />
                        </div>
                        <div className="relative">
                            <label htmlFor="Password" >Password</label>
                            <input onChange={handlePasswordChange} value={password} id="Password" type={showPassword ? "text" : "password"} placeholder="Min. 6 Characters"
                                className="w-full p-3 mt-1.5 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-indigo-500"
                            />
                            
                        </div>
                        <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-800 transition p-3 rounded-md font-semibold">Create</button>

                    </form>

                </div>
            </div>
        </div>
    )
}
export default Register