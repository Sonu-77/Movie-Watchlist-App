import React, { useState,useContext,useEffect } from "react";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { FaSmile } from "react-icons/fa";
import { BiSolidCool } from "react-icons/bi";
import { BookmarkContext } from "../context/BookmarkContext";

function Card({ movie }) {
  const [bookmarkToggle,setbookmarkToggle] = useState("#0d1b2")

  const {addBookmark,getBookmark}=  useContext(BookmarkContext)



  // const handleBookmark = ()=>{

  //   addBookmark(movie)
  //   setbookmarkToggle("#f34040")
  //   localStorage.setItem("bookmarks",JSON.stringify(movie))
  //   console.log("movies",getBookmark);
    

  
  // }
  const handleBookmark = () => {
    addBookmark(movie);
    setbookmarkToggle("#f34040");
  };

  
 
  


  return (
    <>
      <div className="lg:min-h-[27vw] lg:w-[14vw] rounded shadow-xl lg:mb-[1vw] ">
        <div className="lg:h-[18vw] lg:w-[100%] rounded relative ">
          <BsBookmarkPlusFill onClick={handleBookmark} className={`absolute lg:-left-[0.3vw]  ${bookmarkToggle === "#f34040" ? "text-[#f34040]" : "text-[#0d1b2]"} lg:text-[2vw]`}  />
          <img
            className="object-cover lg:h-[18vw] lg:w-[100%] rounded  "
            src={movie.Poster}
            alt=""
          />
        </div>
        <div className="relative ">
          <div className=" flex justify-center items-center gap-2 absolute right-[0.5vw] top-[0.5vw] text-[1.1vw] ">
            {movie.Year < 2015 ? (
              <>
                <FaSmile className="text-[1.5vw] text-[#fca311]" />
                <h2>
                  68 <sup>/100</sup>
                </h2>
              </>
            ) : (
              <>
                <BiSolidCool className="text-[1.5vw] text-[#6a994e]" />
                <h2>
                  80 <sup>/100</sup>{" "}
                </h2>
              </>
            )}
          </div>
        </div>
        <div className="lg:mt-[2.3vw] lg:ml-[1vw] lg:w-[12vw] lg:min-h-[3vw] flex flex-col flex-wrap overflow-hidden lg:mb-[1vw] ">
          <h3 className=" w-full break-words  ">{movie.Title}</h3>
          <h3>{movie.Year}</h3>
        </div>
      </div>
    </>
  );
}

export default Card;
