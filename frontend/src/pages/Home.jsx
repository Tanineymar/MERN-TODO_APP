import { useEffect, useState } from "react"
import axios from 'axios'
function Home(){

    const [loading , setLoading]=useState(false)
    const [todos , setTodos]=useState([ ])
    const [error , setError]=useState(null)

    useEffect(()=>{
        const fetchtodos = async () => {
           try {
            setLoading(true)
             const response = await axios.get("http://localhost:3000/todo/home",{
                withCredentials :true,
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
        fetchtodos();
    },[])
    return(
        <div>
            <h1>HOME PAGE</h1>
        </div>
    )
}
export default Home