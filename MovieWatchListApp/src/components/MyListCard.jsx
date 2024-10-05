import React, { useContext } from "react";
import { BookmarkContext } from "../context/BookmarkContext";
import { FaCheck } from "react-icons/fa";
import { FaRegFaceSmile } from "react-icons/fa6";

function MyListCard({ movie }) {
  const { removeBookmark } = useContext(BookmarkContext);

  const handleRemove = () => {
    removeBookmark(movie.imdbID);
  };

  return (
    <>
      <div
        key={movie.imdbID}
        className="relative lg:min-h-[27vw] lg:w-[14vw] rounded shadow-xl lg:mb-[1vw] "
      >
        <div className="lg:h-[18vw] lg:w-[100%] rounded relative ">
          <FaCheck className="absolute lg:right-[1vw] lg:top-[1vw]   text-[#7ef838] lg:text-[1.9vw] hover:text-[#8b8686] " />
          <img
            className="object-cover lg:h-[18vw] lg:w-[100%] rounded  "
            src={movie.Poster}
            alt=""
          />
        </div>
        <div className="relative ">
          <div className=" flex justify-center items-center gap-2 absolute right-[0.5vw] top-[0.5vw] text-[1.1vw] ">
            <FaRegFaceSmile className="text-[1.4vw]" />
            <h2>
              80 <sup>/100</sup>{" "}
            </h2>
          </div>
        </div>
        <div className="lg:mt-[2.3vw] lg:ml-[1vw] lg:w-[12vw] lg:min-h-[3vw] flex flex-col flex-wrap overflow-hidden lg:mb-[1vw] ">
          <h3 className=" w-full break-words  ">{movie.Title}</h3>
          <h3>{movie.Year}</h3>
        </div>
        <div className="absolute lg:h-[1.8vw] lg:w-[4.5vw] bg-slate-500  flex justify-center items-center lg:left-[1vw] rounded-sm lg:bottom-[0.5vw] ">
          <h3 onClick={handleRemove}>Remove</h3>
        </div>
      </div>
    </>
  );
}

export default MyListCard;
