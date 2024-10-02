import React from "react";
import { IoIosSearch } from "react-icons/io";
import { BsHouse } from "react-icons/bs";
import { FaMediumM } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

function Navbar() {
  return (
    <>
      <div className="lg:fixed top-0 lg:h-[100vh] lg:w-[16vw]  lg:flex lg:flex-col lg:items-center border-r-[0.03vw] rounded-r-sm  ">
        <div className="lg:h-[3vw] lg:w-[12vw] lg:flex lg:justify-center lg:items-center ">
          <h1 className="lg:text-[2vw] noto-sans-font text-[#f34040] ">
            WatchLists
          </h1>
        </div>
        <div className="lg:w-[12vw] lg:h-[1.5vw]  text-[#cbcaca] lg:border-[0.06vw]   lg:flex lg:mt-[0.7vw] lg:justify-center lg:items-center lg:gap-2 rounded ">
          <IoIosSearch className="lg:text-[1vw] " />
          <input
            className=" placeholder:text-[0.8vw] outline-none bg-transparent lg:ml-[0.3vw] lg:w-[9vw] lg:h-[1.2vw] "
            type="text"
            placeholder="Search"
          />
        </div>
        <div className=" lg:w-[12vw] lg:h-[2vw] bg-[#f34040] lg:mt-[2vw]  lg:flex lg:justify-start lg:p-[0.7vw]  lg:items-center lg:gap-2 rounded text-[#ffffff]   ">
          <BsHouse className="lg:text-[0.9vw] " />
          <h3 className=" roboto-regular lg:text-[0.8vw] lg:tracking-wide lg:ml-[0.3vw] ">
            Home
          </h3>
        </div>
        <div className="lg:w-[13vw] lg:h-[0.05vw] bg-[#eae2e2] lg:mt-[1vw] lg:mb-[1vw] "></div>
        <div className="lg:w-[13vw] lg:h-[33vw]  lg:flex lg:flex-col  ">
          <h3 className="poppins-regular lg:text-[1vw] tracking-wide lg:pl-[1vw] ">
            My Lists
          </h3>
          <div className="lg:w-[13vw] lg:h-[30vw]">
            <div className="lg:w-[12vw] lg:h-[2.1vw] border lg:mt-[1vw]  lg:flex lg:justify-start lg:pl-[0.7vw] lg:ml-[0.5vw] lg:items-center lg:gap-2 rounded text-[#ffffff] ">
              <div className="lg:h-[1.5vw] lg:w-[1.5vw] bg-black text-[#ffffff] lg:text-[01vw] lg:flex  justify-center items-center ">
                <FaMediumM />
              </div>
              <h4 className="roboto-medium lg:text-[0.7vw] tracking-wide text-[#534e4e]">
                Movie by Tom Cruise
              </h4>
            </div>
          </div>
        </div>
        <div className="lg:fixed lg:bottom-[1.5vw] lg:mt-[1vw] lg:w-[13vw] lg:h-[2.5vw] border   lg:flex lg:justify-start lg:p-[0.7vw]  lg:items-center  rounded  text-[#000000]  ">
          <div className="lg:h-[2vw] lg:w-[2vw] rounded-full  object-cover overflow-hidden" >
            <img src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
          </div>
          <div className="lg:w-[10vw] relative  lg:flex lg:justify-between lg:ml-[0.4vw] lg:items-center ">
            <h2 className="roboto-medium  absolute lg:w-[7vw] lg:h-[2vw] lg:flex  items-center  text-[#676666] tracking-wide lg:text-[0.8vw] overflow-hidden   ">UserName</h2>
            <BsThreeDots className=" absolute right-0" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;