import React from 'react'
import { BsBookmarkPlusFill } from "react-icons/bs";
import { FaRegFaceSmile } from "react-icons/fa6";



function Card() {
  return (
    <>
    <div className='lg:h-[27vw] lg:w-[14vw] rounded shadow-xl '>
      <div className='lg:h-[18vw] lg:w-[100%] rounded relative '>
        <BsBookmarkPlusFill className="absolute lg:-left-[0.3vw]  text-[#f34040] lg:text-[2vw] " />
        <img className='object-cover lg:h-[18vw] lg:w-[100%] rounded  ' src="https://images.pexels.com/photos/28441109/pexels-photo-28441109/free-photo-of-scenic-forest-pathway-with-wooden-fencing.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
      </div>
      <div className='relative '>
        <div className=' flex justify-center items-center gap-2 absolute right-[0.5vw] top-[0.5vw] text-[1.1vw] ' >
          <FaRegFaceSmile className='text-[1.4vw]' />
          <h2>80 <sup>/100</sup> </h2>
        </div>
      </div>
      <div className='lg:mt-[2.3vw] lg:ml-[1vw] lg:w-[12vw] lg:h-[6vw] flex flex-col flex-wrap overflow-hidden '>
        <h3 className=' w-full break-words '>
          Movie Despription
        </h3>
        <h3>Year</h3>
      </div>
     
    </div>
    </>
  )
}

export default Card