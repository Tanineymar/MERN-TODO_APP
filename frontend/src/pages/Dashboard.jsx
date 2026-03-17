import { useEffect, useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function Dashboard(){
    const navigate = useNavigate()

    const [loading , setLoading]=useState(false)
    const [todos , setTodos]=useState([ ])
    const [error , setError]=useState(null)

    useEffect(()=>{

        const fetchtodos = async () => {
           try {
            setLoading(true)
            const token =  localStorage.getItem("token")
            if(!token){
                navigate("/login")
            }
             const response = await axios.get("http://localhost:3000/todo/home",{
                withCredentials :true,
                headers:{
                    Authorization:`Bearer ${token}`,
                    "Content-Type":"application/json"
                }
             })
             setTodos(response.data.todos)
            //  alert(response.data.message)
             setError(null)
           } catch (error) {
             setError("Failed to fetch todos")
           }finally{
            setLoading(false)
           }
        }
        fetchtodos();
       
    },[])
    return(
        <div className="flex min-h-screen">
            <div className="bg-black w-full text-white">
                <h1>Dashboard page</h1>
            </div>
        </div>
    )
}
export default Dashboard