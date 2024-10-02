import React from "react";
import { IoIosSearch } from "react-icons/io";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import Card from "./Card";


function Home() {
  return (
    <>
      <div className="lg:ml-[20vw] lg:w-[75vw] lg:pt-[3vw] lg:h-[100vh] ">
        <div className="lg:h-[10vw] lg:w-[75vw] rounded lg:border-[0.06vw] border-[#ee8986] lg:flex lg:flex-col lg:gap-[1vw] lg:pl-[1vw] lg:pt-[1vw] ">
          <div className="lg:h-[3vw] lg:w-[30vw]  ">
            <h2 className="roboto-regular lg:text-[2vw] tracking-wide ">
              Welcome to <span className="text-[#f34040]">WatchLists</span>
            </h2>
          </div>
          <div className="flex flex-col lg:gap-[0.5vw] ">
            <p className="lg:text-[1vw] tracking-wide ">
              Browse Movies, add them to watchlists and share it with friends.
            </p>

            <p className="lg:text-[1vw] tracking-wide lg:h-[2vw] lg:w-[70vw] flex   items-center  ">
              Just click the <BsBookmarkPlusFill className="ml-[0.7vw] mr-[0.7vw] text-[#f34040] " /> to add movie, the poster to
              see more detail and <FaCheck className="ml-[0.7vw] mr-[0.7vw] text-[#6a994e] " /> to mark the movies as watched.
            </p>
          </div>
        </div>
        <div className="lg:mt-[3vw]  rounded lg:h-[3vw] lg:w-[75vw] lg:flex lg:justify-between lg:items-center gap-2  border   ">
          <IoIosSearch className="text-[1.5vw]  lg:ml-[1vw] " />
          <input className="lg:h-[2vw] lg:w-[40vw] outline-none " type="text" placeholder="Search movie by title" />
          <button className="bg-[#f34040] lg:h-[3vw] lg:w-[7vw] p-[0.5vw] rounded text-[#f4c1c2]">Search</button>
        </div>
        <div>
            <Card></Card>
        </div>
      </div>
    </>
  );
}

export default Home;
