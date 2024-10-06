import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Register() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { setUserData, setlistofUsers, listofUsers } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const storeUserList = JSON.parse(localStorage.getItem("listofusers")) || [];

    const existedUser = storeUserList.find(
      (user) => user.email === input.email
    );

    if (!existedUser) {
      const newUser = {
        name: input.name,
        email: input.email,
        password: input.password,
        loggedIn: false,
        watchlist: [],
      };

      const updateUsertoStore = [...storeUserList, newUser];

      localStorage.setItem("listofusers", JSON.stringify(updateUsertoStore));

      setUserData({
        name: input.name,
        email: input.email,
        password: input.password,
        loggedIn: false,
        watchlist: [],
      });

      setlistofUsers(updateUsertoStore);

      localStorage.setItem("user", JSON.stringify(input));

      navigate("/login");
    } else {
      alert("User Already Existed, Try login In...");
    }
  };

  return (
    <>
      <div className="min-h-[60vw] w-[80vw] lg:p-[1vw]  lg:w-[40vw] lg:min-h-[20vw] border-[0.01vw]  shadow-lg flex flex-col justify-center items-center rounded  lg:mt-[10vw] mt-[30vw] ml-[10vw] lg:ml-[30vw]    ">
        <div className="  mb-[5vw] lg:mb-[2vw] mt-[3vw] lg:mt-[1vw]  ">
          <h3 className="text-[6vw] lg:text-[2vw] font-bold uppercase ">
            Register
          </h3>
        </div>
        <div>
          <form
            className="flex w-[70vw] lg:w-[30vw]  flex-col justify-center items-center gap-[4vw] lg:gap-[1.5vw]"
            onSubmit={handleSubmit}
          >
            <input
              className="custom-shadow lg:h-[3vw]  w-full h-[10vw] pl-[2vw] lg:pl-[1vw] placeholder:text-[#000000]  lg:placeholder:pl-[0.01vw]  outline-none placeholder:text-[4vw] lg:placeholder:text-[0.9vw]"
              required
              type="text"
              name="name"
              value={input.name}
              onChange={(e) =>
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                })
              }
              placeholder="UserName"
            />

            <input
              className="custom-shadow lg:h-[3vw]  w-full h-[10vw] pl-[2vw] lg:pl-[1vw] placeholder:text-[#000000]  lg:placeholder:pl-[0.01vw]  outline-none placeholder:text-[4vw] lg:placeholder:text-[0.9vw]"
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
              className="custom-shadow lg:h-[3vw]  w-full h-[10vw] pl-[2vw] lg:pl-[1vw] placeholder:text-[#000000]  lg:placeholder:pl-[0.01vw]  outline-none placeholder:text-[4vw] lg:placeholder:text-[0.9vw]"
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
        <div className="lg:w-[20vw] lg:h-[3vw] h-[8vw] w-full lg:mt-[2vw] mt-[5vw]  flex justify-center items-center">
          <h3 className="roboto-medium lg:text-[1vw] text-[3vw] tracking-wide  text-[#778da9] ">
            Already User?
            <NavLink to="/login">
              <span className="text-[#003049] text-[4vw] lg:text-[1.1vw] lg:ml-[0.5vw] ml-[3vw] uppercase underline">
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
