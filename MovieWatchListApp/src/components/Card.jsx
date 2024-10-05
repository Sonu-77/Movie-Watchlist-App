import React, { useState, useContext, useEffect } from "react";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { FaSmile } from "react-icons/fa";
import { BiSolidCool } from "react-icons/bi";
import { BookmarkContext } from "../context/BookmarkContext";
import { UserContext } from "../context/UserContext";

function Card({ movie }) {
  const [bookmarkToggle, setbookmarkToggle] = useState("#0d1b2");

  const { addBookmark } = useContext(BookmarkContext);

  const { userData } = useContext(UserContext);

  const storeUser = JSON.parse(localStorage.getItem("listofusers")) || [];

  const loggedUsertoBookmark = storeUser.find(
    (user) => user.email === userData.email
  );
  console.log("checking the user", loggedUsertoBookmark);

  const handleBookmark = () => {
    if (loggedUsertoBookmark) {
      addBookmark(movie);
      setbookmarkToggle("#f34040");
    }
  };

  return (
    <>
      <div className="lg:min-h-[27vw] lg:w-[14vw] min-h-[50vw] w-[60vw] rounded shadow-xl lg:mb-[1vw] lg:pb-0 pb-[3vw] ">
        <div className="lg:h-[18vw] lg:w-[100%]  h-[70vw] w-[100%] rounded relative ">
          <BsBookmarkPlusFill
            onClick={handleBookmark}
            className={`absolute lg:-left-[0.3vw] -left-[0.7vw]  ${
              bookmarkToggle === "#f34040" ? "text-[#f34040]" : "text-[#0d1b2]"
            } lg:text-[2vw] text-[7vw]`}
          />
          <img
            className="object-cover lg:h-[18vw] lg:w-[100%] h-[70vw] w-[100%] rounded  "
            src={movie.Poster}
            alt=""
          />
        </div>
        <div className="relative ">
          <div className=" flex justify-center items-center gap-2 absolute right-[0.5vw] top-[0.5vw] lg:text-[1.1vw] text-[3vw] ">
            {movie.Year < 2015 ? (
              <>
                <FaSmile className="lg:text-[1.5vw] text-[4vw] text-[#fca311]" />
                <h2>
                  68 <sup>/100</sup>
                </h2>
              </>
            ) : (
              <>
                <BiSolidCool className="lg:text-[1.5vw] text-[4vw] text-[#6a994e]" />
                <h2>
                  80 <sup>/100</sup>
                </h2>
              </>
            )}
          </div>
        </div>
        <div className="lg:mt-[2.3vw] mt-[4vw] lg:ml-[1vw] ml-[2vw] lg:w-[12vw] lg:min-h-[3vw] flex flex-col flex-wrap overflow-hidden lg:mb-[1vw] text-[3vw] lg:text-[1vw]  ">
          <h3 className=" w-full break-words roboto-medium   ">{movie.Title}</h3>
          <h3 className="roboto-medium">{movie.Year}</h3>
        </div>
      </div>
    </>
  );
}

export default Card;
