import { Route,Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import MyList from "./components/MyList"
import Login from "./components/Login"
import Register from "./components/Register"
import ProtectRoute from "./service/ProtectRoute"



function App() {


  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/mylist" element={<ProtectRoute />}>
          <Route index element={<MyList />} /> 
        </Route>
      <Route path="login" element={<Login/>} />
      <Route path="register" element={<Register/>} />
      <Route path="*" element={<div className="lg:ml-[40vw] text-[#a8dadc] lg:mt-[20vw] lg:text-[3vw] capitalize">404 page not found</div>} />

    </Routes>
    

   
    

    </>
  )
}

export default App
