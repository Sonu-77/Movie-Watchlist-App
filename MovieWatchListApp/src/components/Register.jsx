import React, { useState,useContext } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Register() {

    const [input,setInput]=useState({
        name:"",
        email:"",
        password:""
    })

    const {setUserData}=useContext(UserContext)

    const navigate = useNavigate()


    const handleSubmit= (e)=>{
        e.preventDefault()

        setUserData({
          name: input.name,
          email: input.email,
          loggedIn: false
      });
        
        localStorage.setItem("user",JSON.stringify(input))

        navigate("/login")

    }


  return (
    <>
      <div className="sm:w-full lg:p-[1vw]  lg:w-[40vw] lg:min-h-[20vw] border-[0.01vw]  shadow-lg flex flex-col justify-center items-center rounded  lg:mt-[10vw] sm:mt-[20vw] lg:ml-[30vw]    ">
        <div className="  sm:mb-[5vw] lg:mb-[2vw]  ">
          <h3 className="sm:text-[6vw] lg:text-[2vw] font-bold uppercase ">
            Register
          </h3>
        </div>
        <div>
          <form className="sm:flex sm:w-[90vw] lg:w-[30vw]  sm:flex-col sm:justify-center sm:items-center sm:gap-[4vw] lg:gap-[1.5vw]"
            onSubmit={handleSubmit}
          >
            <input
              className="custom-shadow lg:h-[3.5vw] capitalize  sm:w-full sm:h-[12vw] sm:pl-[4vw] lg:pl-[1vw]  placeholder:sm:text-[#000000] sm:placeholder:pl-[2vw] lg:placeholder:pl-[0.01vw]  outline-none"
              required
              type="text"
              name="name"
              value={input.name}
              onChange={(e)=>setInput({
                ...input,[e.target.name]:e.target.value
              })}
              placeholder="UserName"
            />

            <input
              className="custom-shadow lg:h-[3.5vw]  sm:w-full sm:h-[12vw] sm:pl-[4vw] lg:pl-[1vw] placeholder:sm:text-[#000000] sm:placeholder:pl-[2vw] lg:placeholder:pl-[0.01vw]  outline-none"
              required
              type="email"
              name="email"
              value={input.email}
              onChange={(e)=>setInput({
                ...input,[e.target.name]:e.target.value
              })}
              placeholder="Email"
            />
            <input
              className="custom-shadow lg:h-[3.5vw]  sm:w-full sm:h-[12vw] sm:pl-[4vw] lg:pl-[1vw] placeholder:sm:text-[#000000] sm:placeholder:pl-[2vw] lg:placeholder:pl-[0.01vw]  outline-none"
              required
              type="password"
              name="password"
              value={input.password}
              onChange={(e)=>setInput({
                ...input,[e.target.name]:e.target.value
              })}
              placeholder="Password"
            />

            <button
              className="custom-shadow sm:w-[25vw]  lg:w-[6vw] lg:h-[2vw]  bg-[#f34040]  sm:text-[#ffff] sm:text-[3.4vw] lg:text-[1.1vw] rounded sm:h-[10vw] uppercase font-bold  outline-none"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="lg:w-[20vw] lg:h-[3vw] lg:mt-[2vw] flex justify-center items-center ">
          <h3 className="roboto-medium lg:text-[1.2vw] tracking-wide text-[#778da9] ">
            Already User?
            <NavLink to="/login">
              <span className="text-[#003049] lg:ml-[0.5vw] uppercase underline">
                Login
              </span>
            </NavLink>
          </h3>
        </div>
      </div>
    </>
  );
}

export default Register;
