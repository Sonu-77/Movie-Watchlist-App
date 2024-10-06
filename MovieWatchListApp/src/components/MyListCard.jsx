import React, { useContext, useState } from "react";
import { BookmarkContext } from "../context/BookmarkContext";
import { FaCheck } from "react-icons/fa";
import { FaRegFaceSmile } from "react-icons/fa6";

function MyListCard({ movie }) {
  const { removeBookmark } = useContext(BookmarkContext);

  const [check, setcheck] = useState("#8b8686");

  const handleRemove = () => {
    removeBookmark(movie.imdbID);
  };

  const handlecheck = () => {
    setcheck((previous) => (previous == "#8b8686" ? "#7ef838" : "#8b8686"));
  };

  return (
    <>
      <div
        key={movie.imdbID}
        className="relative lg:min-h-[27vw] min-h-[100vw] w-[65vw] lg:w-[14vw] rounded shadow-xl lg:mb-[1vw]  "
      >
        <div className="lg:h-[18vw] lg:w-[100%]  h-[70vw] w-[100%] rounded relative  ">
          <FaCheck
            style={{ color: check }}
            className={`absolute lg:right-[1vw] right-[3vw] lg:top-[1vw] top-[3vw]  lg:text-[1.9vw] text-[6vw]`}
            onClick={handlecheck}
          />
          <img
            className="object-cover lg:h-[18vw] lg:w-[100%] h-[70vw] w-[100%] rounded  "
            src={movie.Poster}
            alt="poster"
          />
        </div>
        <div className="relative ">
          <div
            className=" flex justify-center items-center lg:gap-2 gap-[2vw] 
           absolute lg:right-[0.5vw] right-[5vw] lg:top-[0.5vw] lg:text-[1.1vw] text-[4vw] "
          >
            <FaRegFaceSmile className="lg:text-[1.4vw] text-[4vw]" />
            <h2>
              80 <sup>/100</sup>
            </h2>
          </div>
        </div>
        <div className="lg:mt-[2.3vw] lg:ml-[1vw] lg:w-[12vw] lg:min-h-[3vw] mt-[7vw] ml-[3vw] w-[70vw] min-h-[5vw] flex flex-col flex-wrap overflow-hidden lg:mb-[1vw] mb-[2vw] ">
          <h3 className=" w-full break-words  ">{movie.Title}</h3>
          <h3>{movie.Year}</h3>
        </div>
        <div className="absolute lg:h-[1.8vw] lg:w-[4.5vw] h-[6vw] w-[21vw] bg-[#f5ebe0]  flex justify-center items-center lg:left-[1vw] left-[3vw] text-[4vw] lg:text-[1vw] rounded-sm lg:bottom-[0.5vw] bottom-[2vw] ">
          <h3 onClick={handleRemove}>Remove</h3>
        </div>
      </div>
    </>
  );
}

export default MyListCard;
