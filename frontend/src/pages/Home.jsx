import { useState } from "react"

function Home(){

    const[todos , setTodos] = useState([])
    const[error , setError]=useState(null)
    const[loading , setLoading]=useState(false)
    return(
        <h1>Home page</h1>
    )
}

export default Home