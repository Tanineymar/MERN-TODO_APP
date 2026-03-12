import { Routes , Route} from "react-router-dom"
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import PageNotFound from "./pages/PageNotFound.jsx"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element = {<Home/>}></Route>
        <Route path="/Login" element = {<Login/>}></Route>
        <Route path="/Signup" element = {<Signup/>}></Route>
        <Route path="*" element = {<PageNotFound/>}></Route>
      </Routes>
    </>
  )
}

export default App
