import React, { useContext, useState } from "react";
import { BiEdit } from "react-icons/bi";
import MyListCard from "./MyListCard";
import { BookmarkContext } from "../context/BookmarkContext";
import { UserContext } from "../context/UserContext";
import { json } from "react-router-dom";
import "./Login.css";

function MyList() {
  const { getBookmark } = useContext(BookmarkContext);
  const { userData } = useContext(UserContext);

  const [showInput, setShowInput] = useState("hidden");

  const [customemessage, setcustomemessage] = useState(
    "Say something about the watchlist... "
  );

  const handleEdit = () => {
    setShowInput((previous) => (previous === "hidden" ? "flex" : "hidden"));
  };

  const handlemessage = (e) => {
    setcustomemessage(e.target.value);
  };

  const handleSubmit = () => {
    customemessage;
    setShowInput((previous) => (previous === "hidden" ? "flex" : "hidden"));
  };

  return (
    <>
      <div className="lg:ml-[20vw] lg:w-[75vw] lg:pt-[3vw] lg:h-[100vh] mt-[25vw] lg:mt-[0] ml-[5vw] ">
        <div className="lg:min-h-[9vw] lg:w-[100%] w-[90vw] min-h-[30vw]  flex flex-col lg:gap-[0.5vw] gap-[5vw] lg:mb-[4vw]  ">
          <div className="flex items-center lg:gap-[1vw] gap-[4vw] lg:h-[4vw] h-[15vw] w-[100%]  lg:pb-[2vw]  ">
            <h1 className="poppins-regular lg:text-[2vw] text-[5vw] tracking-wide ">
              Movie for {userData.name}
            </h1>
            <BiEdit
              className="lg:text-[2vw] text-[6vw] text-[#444343]"
              onClick={handleEdit}
            />
          </div>
          <div
            className={`flex justify-start items-center lg:gap-[2vw] gap-[6vw] lg:mb-[1vw] ${showInput} `}
          >
            <input
              type="text"
              className="custom-shadow  w-[50vw] lg:w-[20vw] lg:h-[2vw]  h-[10vw] pl-[2vw] lg:pl-[1vw] placeholder:text-[#000000]  lg:placeholder:pl-[0.01vw]  outline-none placeholder:text-[4vw] lg:placeholder:text-[0.9vw] "
              onChange={handlemessage}
              name="message"
            />
            <button
              className="w-[20vw]  lg:w-[6vw] lg:h-[2vw]  bg-[#f34040]  text-[#ffff] text-[3.4vw] lg:text-[1.1vw] rounded h-[8vw] uppercase font-bold  outline-none"
              onClick={handleSubmit}
            >
              submit
            </button>
          </div>
          <div className="flex flex-col justify-start lg:gap-[0.5vw] gap-[2vw] lg:h-[5vw] h-[30vw] w-[100%] lg:mt-[0vw] mt-[2vw] ">
            <h4 className="roboto-medium lg:text-[1vw] text-[4vw] tracking-wide ">
              About This watchlist
            </h4>
            <p className="roboto-regular lg:text-[0.9vw] text-[4w] tracking-wide ">
              {customemessage}
            </p>
          </div>
        </div>
        <div className="lg:mt-[1vw] flex lg:flex-row flex-col items-center mt-[1vw]  lg:flex-wrap lg:gap-[1.24vw] gap-[6vw] lg:w-[75vw] lg:min-h-[25vw] w-[90vw] min-h-[50vw] lg:mb-[0vw]  mb-[3vw] ">
          {getBookmark.length > 0 ? (
            getBookmark.map((movie) => (
              <MyListCard key={movie.imdbID} movie={movie} />
            ))
          ) : (
            <div className="lg:h-[5vw] lg:w-[50vw] h-[20vw] w-[70vw] rounded-md bg-[#ef6974] text-[#ffffff] flex justify-center items-center lg:text-[1.5vw] text-[3vw] lg:mt-[1vw] lg:ml-[10vw]   ">
              <h2 className="tracking-wider">
                Try Adding Movies to Watchlist....
              </h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MyList;
