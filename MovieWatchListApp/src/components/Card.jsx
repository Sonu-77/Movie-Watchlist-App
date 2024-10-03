import React from "react";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { FaSmile } from "react-icons/fa";
import { BiSolidCool } from "react-icons/bi";

function Card({ movie }) {
  return (
    <>
      <div className="lg:min-h-[27vw] lg:w-[14vw] rounded shadow-xl lg:mb-[1vw] ">
        <div className="lg:h-[18vw] lg:w-[100%] rounded relative ">
          <BsBookmarkPlusFill className="absolute lg:-left-[0.3vw]  text-[#f34040] lg:text-[2vw] hover:text-[#8b8686] " />
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
