import { Route,Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import MyList from "./components/MyList"
import Login from "./components/Login"
import Register from "./components/Register"



function App() {


  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="mylist" element={ <MyList></MyList>} />
      <Route path="login" element={<Login/>} />
      <Route path="register" element={<Register/>} />

    </Routes>
    

   
    

    </>
  )
}

export default App
