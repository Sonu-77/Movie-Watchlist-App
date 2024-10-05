import React, { useState, useEffect, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { BsHouse } from "react-icons/bs";
import { FaMediumM } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { UserContext } from "../context/UserContext";
import { BookmarkContext } from "../context/BookmarkContext";
import { HiMiniUserCircle } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [menu, setMenu] = useState("hidden"); //logout login
  const [profileShow, setprofileShow] = useState(false); //mobile device profile show
  const [crossmenuIcon, setcrossMenuIcon] = useState("hidden"); //to close profile
  const [menuIcon, setMenuIcon] = useState("flex"); //when click to show the profile

  const { userData, setUserData, setlistofUsers } = useContext(UserContext);

  const { getBookmark } = useContext(BookmarkContext);

  const navigate = useNavigate();

  useEffect(() => {
    const checkLoggedIn = JSON.parse(localStorage.getItem("loggedIn"));
    if (checkLoggedIn === true) {
      const userDetail = JSON.parse(localStorage.getItem("user"));
      setUserData({ ...userDetail, loggedIn: true });
    }
  }, [setUserData]);

  const handleMenu = () => {
    setMenu((previous) => (previous === "hidden" ? "flex" : "hidden"));
  };

  const handleLogOut = () => {
    const storedUsers = JSON.parse(localStorage.getItem("listofusers")) || [];

    const logoutUser = storedUsers.map((user) => {
      if (user.email === userData.email) {
        return { ...user, loggedIn: false };
      }
      return user;
    });

    localStorage.setItem("listofusers", JSON.stringify(logoutUser));

    setlistofUsers(logoutUser);

    localStorage.setItem("loggedIn", JSON.stringify(false));
    setUserData({ ...userData, loggedIn: false });

    setMenu((previous) => (previous === "hidden" ? "flex" : "hidden"));
    navigate("/login");
  };

  const toogleMenu = () => {
    if (menushow == false) {
      return (
        setprofileShow(true), setcrossMenuIcon("flex"), setMenuIcon("hidden")
      );
    } else {
      return (
        setprofileShow(false), setcrossMenuIcon("hidden"), setMenuIcon("flex")
      );
    }
  };

  return (
    <>
      <div className="fixed z-30 bg-white  shadow-lg lg:shadow-none top-0 lg:h-[100vh] lg:w-[16vw] flex lg:flex-col  lg:items-center  border-r-[0.03vw] rounded-r-sm   ">
        <div className="lg:h-[3vw] lg:w-[12vw] h-[15vw] w-[80vw]   flex lg:justify-center justify-start items-center ">
          <h1 className="lg:text-[2vw] text-[7vw] lg:ml-0 ml-[4vw]   tracking-wide noto-sans-font text-[#f34040] ">
            WatchLists
          </h1>
        </div>
        <div className="lg:w-[12vw] hidden lg:h-[1.5vw]  text-[#cbcaca] lg:border-[0.06vw]   lg:flex lg:mt-[0.7vw] lg:justify-center lg:items-center lg:gap-2 rounded ">
          <IoIosSearch className="lg:text-[1vw] " />
          <input
            className=" placeholder:text-[0.8vw] outline-none bg-transparent lg:ml-[0.3vw] lg:w-[9vw] lg:h-[1.2vw] "
            type="text"
            placeholder="Search"
          />
        </div>
        <NavLink to="/">
          <div className=" lg:w-[12vw] lg:h-[2vw] bg-[#f34040] lg:mt-[2vw] hidden lg:flex lg:justify-start lg:p-[0.7vw]  lg:items-center lg:gap-2 rounded text-[#ffffff]   ">
            <BsHouse className="lg:text-[0.9vw] " />
            <h3 className=" roboto-regular lg:text-[0.8vw] lg:tracking-wide lg:ml-[0.3vw] ">
              Home
            </h3>
          </div>
        </NavLink>
        <div className="lg:w-[13vw] lg:h-[0.05vw] bg-[#eae2e2] lg:mt-[1vw] lg:mb-[1vw] "></div>
        <div className="lg:w-[13vw] lg:h-[33vw] hidden  lg:flex lg:flex-col  ">
          <h3 className="poppins-regular lg:text-[1vw] tracking-wide lg:pl-[1vw] ">
            My Lists
          </h3>
          <div className="lg:w-[13vw] lg:max-h-[30vw] overflow-y-auto">
            {userData.loggedIn === true ? (
              getBookmark.map((movie) => {
                console.log(getBookmark);

                return (
                  <NavLink key={movie.imdbID} to="mylist">
                    <div className="lg:w-[12vw] lg:h-[2.1vw] border lg:mt-[1vw]  lg:flex lg:justify-start lg:pl-[0.7vw] lg:ml-[0.5vw] lg:items-center lg:gap-2 rounded text-[#ffffff] ">
                      <div className="lg:h-[1.5vw] lg:w-[1.5vw] bg-black text-[#ffffff] lg:text-[01vw] lg:flex  justify-center items-center ">
                        <FaMediumM />
                      </div>
                      <h4 className="roboto-medium lg:text-[0.7vw] tracking-wide text-[#534e4e] truncate">
                        {movie.Title}
                      </h4>
                    </div>
                  </NavLink>
                );
              })
            ) : (
              <div className="lg:w-[13vw] lg:mt-[10vw] lg:h-[2vw] bg-[#caf0f8] flex justify-center items-center lg:p-[0.5vw] shadow-lg  ">
                <h3 className="lg:text-[1vw] text-[#38a3a5] tracking-wide ">
                  login in to see watchlist...
                </h3>
              </div>
            )}
          </div>
        </div>
        <div className="lg:fixed  hidden lg:bottom-[1.5vw] lg:mt-[1vw] lg:w-[13vw] rounded-full lg:h-[2.5vw] h-[15vw] w-[15vw]  border    lg:flex lg:justify-start lg:p-[0.7vw]  lg:items-center  lg:rounded  text-[#000000]   ">
          <div className="lg:h-[1.8vw] lg:w-[1.8vw] flex justify-center items-center rounded-full border-[#000000] bg-[#e0e1dd] lg:border-[0.1vw] object-cover overflow-hidden">
            <FiUser className="text-[1.2vw]" />
          </div>
          <div className="lg:w-[10vw] relative  lg:flex lg:justify-between lg:ml-[0.4vw] lg:items-center ">
            <h2 className="roboto-medium  absolute lg:w-[7vw] lg:h-[2vw] lg:flex  items-center  text-[#5e5555] tracking-wide lg:text-[0.8vw] overflow-hidden  capitalize   ">
              {userData.loggedIn === true ? userData.name : "Guest"}
            </h2>
            <BsThreeDots className=" absolute right-0" onClick={handleMenu} />
          </div>
          <div
            className={`absolute roboto-bold lg:min-w-[5vw] ${menu} lg:h-[3vw] rounded-md bg-[#cacfd2] lg:bottom-[2.7vw] lg:right-0 flex flex-col justify-center items-center uppercase`}
          >
            <h4 onClick={handleLogOut}>
              {userData.loggedIn === true ? (
                "Logout"
              ) : (
                <NavLink to={"/login"}>Login</NavLink>
              )}
            </h4>
          </div>
        </div>
        <div className="lg:hidden h-[15vw] w-[20vw] flex justify-center items-center  ">
          <HiMiniUserCircle className="text-[10vw] text-[#2b2d42]" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
