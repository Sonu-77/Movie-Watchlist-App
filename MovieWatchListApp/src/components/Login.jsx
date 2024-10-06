import React, { useState, useContext } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const { setUserData, setlistofUsers, listofUsers } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const registerUser = JSON.parse(localStorage.getItem("listofusers")) || [];

    const userExistinregisterUser = registerUser.find(
      (user) => user.email === input.email
    );

    if (userExistinregisterUser) {
      if (input.password === userExistinregisterUser.password) {
        setUserData({
          name: userExistinregisterUser.name,
          email: userExistinregisterUser.email,
          loggedIn: true,
        });

        const updateLogin = registerUser.map((user) => {
          if (user.email === userExistinregisterUser.email) {
            return { ...user, loggedIn: true };
          } else {
            return { ...user, loggedIn: false };
          }
        });

        setlistofUsers(updateLogin);

        localStorage.setItem("listofusers", JSON.stringify(updateLogin));

        localStorage.setItem("loggedIn", JSON.stringify(true));

        navigate("/");
      } else {
        alert("u have entered wrong password");
      }
    } else {
      alert("User does not Exist, Please Register to Login ...");
      navigate("/register");
    }
  };

  return (
    <>
      <div className=" lg:p-[1vw] p-[4vw]  lg:w-[40vw] lg:min-h-[20vw] min-h-[60vw] w-[80vw]  border-[0.01vw]  shadow-lg flex flex-col justify-center items-center rounded  lg:mt-[10vw]  lg:ml-[30vw] mt-[30vw] ml-[10vw]    ">
        <div className="  mb-[10vw] lg:mb-[2vw]  ">
          <h3 className="text-[6vw] lg:text-[2vw] font-bold uppercase ">
            Login
          </h3>
        </div>
        <div>
          <form
            className="flex w-[70vw] lg:w-[30vw] flex-col justify-center items-center gap-[4vw] lg:gap-[1.5vw]"
            onSubmit={handleSubmit}
          >
            <input
              className="custom-shadow lg:h-[3.5vw]  w-full h-[10vw] pl-[2vw] lg:pl-[1vw] placeholder:text-[#000000]  lg:placeholder:pl-[0.01vw]  outline-none placeholder:text-[4vw] lg:placeholder:text-[0.9vw]"
              required
              type="email"
              name="email"
              value={input.email}
              onChange={(e) =>
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                })
              }
              placeholder="Email"
            />
            <input
              className="custom-shadow lg:h-[3.5vw]  w-full h-[10vw] pl-[2vw] lg:pl-[1vw] placeholder:text-[#000000]  lg:placeholder:pl-[0.01vw]  outline-none placeholder:text-[4vw] lg:placeholder:text-[0.9vw]"
              required
              type="password"
              name="password"
              value={input.password}
              onChange={(e) =>
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                })
              }
              placeholder="Password"
            />

            <button
              className="custom-shadow w-[20vw]  lg:w-[6vw] lg:h-[2vw]  bg-[#f34040]  text-[#ffff] text-[3.4vw] lg:text-[1.1vw] rounded h-[8vw] uppercase font-bold  outline-none"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="lg:w-[20vw] lg:h-[3vw] h-[8vw] w-full lg:mt-[2vw] mt-[5vw]  flex justify-center items-center ">
          <h3 className="roboto-medium lg:text-[1.2vw] text-[3vw] tracking-wide  text-[#778da9] ">
            Don't have account?
            <NavLink to="/register">
              <span className="text-[#003049] text-[4vw] lg:text-[1.2vw] lg:ml-[0.5vw] ml-[3vw] uppercase underline">
                Register
              </span>
            </NavLink>
          </h3>
        </div>
      </div>
    </>
  );
}

export default Login;
