import { Outlet,useNavigate } from "react-router-dom"
import React, { useEffect } from 'react'

function ProtectRoute() {
  
    const navigate=useNavigate()

    const loginCheck = JSON.parse(localStorage.getItem("loggedIn"))

    useEffect(()=>{
        if(!loginCheck){
            navigate("/login")
        }else{
            <Outlet />
        }
    },[loginCheck,navigate])

    return loginCheck ? <Outlet /> : null;

}

export default ProtectRoute