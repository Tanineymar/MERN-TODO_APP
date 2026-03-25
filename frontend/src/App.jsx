import { Routes ,Route } from "react-router-dom"

import Register from "./pages/Register.jsx"
import Login from "./pages/Login.jsx"
import PageNotFound from "./pages/PageNotFound.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Landing from "./pages/Landing.jsx"


function App(){
  return(
    <>
    
    <Routes>
      <Route path="/" element= {<Landing/>}/>
      <Route path="/register" element= {<Register/>}/>
      <Route path="/login" element= {<Login/>}/>
      <Route path="/home" element= {<Dashboard/>} />
      <Route path="*" element= {<PageNotFound/>}/>
    </Routes>
    </>
  )
}

export default App