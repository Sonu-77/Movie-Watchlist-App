import React from 'react'
import { IoIosSearch } from "react-icons/io";


function Home() {
  return (
      <>
      <div className='lg:ml-[20vw] lg:w-[70vw] lg:h-[100vh] bg-slate-400'>
        <div>
          <h2>Welcome To WatchLists</h2>
          <p>Brose Movies, add them to watchlists and share it with friends.</p>
          <p>Just click the  to dd movie,the poster to see more detail and to markhe movies as watched</p>
        </div>
        <div>
        <IoIosSearch/>
        <input type="text" placeholder='Search movie by title' />
        <button>Search</button>
        </div>
      </div>
      </>
  )
}

export default Home