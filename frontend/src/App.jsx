import { Routes ,Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Register from "./pages/Register.jsx"
import Login from "./pages/Login.jsx"
import PageNotFound from "./pages/PageNotFound.jsx"


function App(){
  return(
    <>
    <Routes>
      <Route path="/" element= {<Home/>} />
      <Route path="/login" element= {<Login/>}/>
      <Route path="/register" element= {<Register/>} />
      <Route path="*" element= {<PageNotFound/>}/>
    </Routes>
    </>
  )
}

export default App