import React from 'react'

import { FaCheck } from "react-icons/fa";
import { FaRegFaceSmile } from "react-icons/fa6";

function MyListCard() {
  return (
    <>
    <div className='lg:min-h-[27vw] lg:w-[14vw] rounded shadow-xl lg:mb-[1vw] '>
      <div className='lg:h-[18vw] lg:w-[100%] rounded relative '>
        <FaCheck className="absolute lg:right-[1vw] lg:top-[1vw]   text-[#7ef838] lg:text-[1.9vw] hover:text-[#8b8686] "/>
        <img className='object-cover lg:h-[18vw] lg:w-[100%] rounded  ' src="https://images.pexels.com/photos/28441109/pexels-photo-28441109/free-photo-of-scenic-forest-pathway-with-wooden-fencing.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
      </div>
      <div className='relative '>
        <div className=' flex justify-center items-center gap-2 absolute right-[0.5vw] top-[0.5vw] text-[1.1vw] ' >
          <FaRegFaceSmile className='text-[1.4vw]' />
          <h2>80 <sup>/100</sup> </h2>
        </div>
      </div>
      <div className='lg:mt-[2.3vw] lg:ml-[1vw] lg:w-[12vw] lg:min-h-[3vw] flex flex-col flex-wrap overflow-hidden lg:mb-[1vw] '>
        <h3 className=' w-full break-words  '>
          Movie Description
        </h3>
        <h3>Year</h3>
      </div>
     
    </div>
    </>
  )
}

export default MyListCard