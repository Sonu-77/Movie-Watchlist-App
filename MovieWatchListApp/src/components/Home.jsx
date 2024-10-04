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
        setError(null)
        
      } else {
        console.log(response.data.Error);
        setError(response.data.Error)
      }
    } catch (error) {
      console.log(error);
    }
  };



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
              Just click the{" "}
              <BsBookmarkPlusFill className="ml-[0.7vw] mr-[0.7vw] text-[#f34040] " />{" "}
              to add movie, the poster to see more detail and{" "}
              <FaCheck className="ml-[0.7vw] mr-[0.7vw] text-[#6a994e] " /> to
              mark the movies as watched.
            </p>
          </div>
        </div>
        <div className="lg:mt-[3vw]  rounded lg:h-[3vw] lg:w-[75vw] lg:flex lg:justify-between lg:items-center gap-2  border   ">
          <div className="flex justify-center items-center lg:gap-[2vw]   ">
            <IoIosSearch className="text-[1.5vw]  lg:ml-[1vw] " />
            <input
              className="lg:h-[2vw] lg:w-[40vw] outline-none text-[#14213d] "
              type="text"
              value={query}
              placeholder="Search movie by title"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <button
            className="bg-[#f34040] lg:h-[3vw] lg:w-[7vw] p-[0.5vw] rounded text-[#f4c1c2] hover:bg-[#e86464] hover:text-[#efeeee]"
            onClick={searchMovies}
          >
            Search
          </button>
        </div>
       
        <div className="lg:mt-[2vw] flex  flex-wrap lg:gap-[1.24vw] lg:w-[75vw] lg:min-h-[25vw] ">
          {
            error ?(
              <>
              <div className={`roboto-bold lg:w-[100%] lg:h-[10vw] bg-[#fbc4ab] lg:mt-[3vw] flex flex-col justify-center items-center text-[#335c67] rounded` }>

                <p className="lg:text-[1.8vw] uppercase ">{error} </p>
                <p className="lg:text-[1.8vw] uppercase "> Please try searching the correct Movie ....</p>
              </div>
              </>
            ):(
              
                movies.map((movie) => {
                    return <Card key={movie.imdbID} movie={movie}></Card>;
                  }
                )
              
            )
          }
        </div>
      </div>
    </>
  );
}

export default Home;
