import {  useEffect, useState } from "react"
import axios from 'axios'
function Home(){

    const[todos , setTodos] = useState([])
    const[error , setError]=useState(null)
    const[loading , setLoading]=useState(false)

    useEffect(()=>{
        const fetchTodo = async ()=>{
            try {
                setLoading(true)
                const response = await axios.get("http://localhost:3000/todo/home",{
                    withCredentials:true,
                    headers:{
                        "Content-Type":"application/json"
                    }
                    
                })
                setTodos(response.data.todos)
                setError(null)
            } catch (error) {
                setError("Failed to fetch todos")
            }finally{
                setLoading(false)
            }
        }
        fetchTodo()
    },[])

    return(
        <h1>Home page</h1>

       
    )
}

export default Home