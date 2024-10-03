import { Route,Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import MyList from "./components/MyList"


function App() {


  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="mylist" element={ <MyList></MyList>} />

    </Routes>
    

   
    

    </>
  )
}

export default App
