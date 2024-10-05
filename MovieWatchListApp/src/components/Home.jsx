import React, { useState } from "react";
import axios from "axios";
import { IoIosSearch } from "react-icons/io";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import Card from "./Card";

function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const searchMovies = async () => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${query}&apikey=d7723440`
      );

      if (response.data.Response === "True") {
        setMovies(response.data.Search);
        setError(null);
      } else {
        console.log(response.data.Error);
        setError(response.data.Error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="lg:ml-[20vw] ml-[5vw]  -z-20 lg:w-[75vw] lg:mt-[3vw] mt-[20vw] lg:h-[100vh] lg:pb-0 pb-[1vw] ">
        <div className="lg:h-[10vw] lg:w-[75vw] h-[40vw] w-[90vw]    rounded lg:border-[0.06vw] border-[0.3vw] border-[#ee8986] flex flex-col lg:gap-[1vw] gap-[2vw] lg:pl-[1vw] pt-[4vw] pl-[4vw]  lg:pt-[1vw] ">
          <div className="lg:h-[3vw] lg:w-[30vw]  h-[10vw] w-[70vw]  ">
            <h2 className="roboto-regular lg:text-[2vw] text-[5vw] tracking-wide ">
              Welcome to <span className="text-[#f34040]">WatchLists</span>
            </h2>
          </div>
          <div className="flex flex-col lg:gap-[0.5vw] gap-[2vw]  mr-[4vw] ">
            <p className="lg:text-[1vw] text-[2.7vw] tracking-wide ">
              Browse Movies, add them to watchlists and share it with friends.
            </p>

            <div className="lg:text-[1vw] text-[2.7vw] tracking-wide lg:h-[2vw] lg:w-[70vw] h-[15vw] w-[80vw]  flex items-center flex-wrap lg:gap-0 gap-[0.5vw] lg:pb-[1vw] pb-[3vw]  ">

              <p>Just click the</p>
              <BsBookmarkPlusFill className="ml-[0.7vw] mr-[0.7vw] text-[#f34040] " />
              to add movie, the poster to see more detail and
              <FaCheck className="lg:ml-[0.7vw] lg:mr-[0.7vw] ml-[0.7vw] mr-[0.7vw]  text-[#6a994e] " /> to
              mark the movies as watched.
            </div>
          </div>
        </div>
        <div className="lg:mt-[3vw] mt-[5vw]  rounded lg:h-[3vw] lg:w-[75vw] h-[7vw] w-[80vw] flex justify-between items-center gap-2  border ml-[4vw]  lg:ml-0  ">
          <div className="flex justify-center items-center lg:gap-[2vw] gap-[2vw]   ">
            <IoIosSearch className="lg:text-[1.5vw]  text-[4vw] lg:ml-[1vw] ml-[1vw] " />
            <input
              className="lg:h-[2vw] lg:w-[60vw] h-[5vw]  w-[60vw] lg:text-[1vw] text-[2.5vw]  outline-none text-[#14213d] "
              type="text"
              value={query}
              placeholder="Search movie by title"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <button
            className="bg-[#f34040] lg:h-[3vw] lg:w-[7vw] h-[7vw] w-[15vw] lg:p-[0.5vw] lg:text-[1.3vw] rounded text-[#f4c1c2] hover:bg-[#e86464] hover:text-[#efeeee] p-[1vw] "
            onClick={searchMovies}
          >
            Search
          </button>
        </div>

        <div className=" lg:mt-[2vw] mt-[6vw] flex lg:flex-row flex-col items-center  lg:flex-wrap lg:gap-[1.24vw] gap-[5vw] lg:w-[75vw] lg:min-h-[25vw] min-h-[70vw] w-[80vw] lg:ml-0 ml-[4vw] ">
          {error ? (
            <>
              <div
                className='roboto-bold lg:w-[100%] lg:h-[10vw] h-[20vw] w-[80vw]  bg-[#fbc4ab] lg:mt-[3vw] flex flex-col justify-center items-center text-[#335c67] rounded'
              >
                <p className="lg:text-[1.8vw] text-[3vw] uppercase ">{error} </p>
                <p className="lg:text-[1.8vw] text-[3vw] uppercase ">
                  
                  Please try searching the correct Movie ....
                </p>
              </div>
            </>
          ) : (
            movies.map((movie) => {
              return <Card key={movie.imdbID} movie={movie}></Card>;
            })
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
