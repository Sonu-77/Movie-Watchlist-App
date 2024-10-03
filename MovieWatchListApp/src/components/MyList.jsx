import React from 'react'
import { BiEdit } from "react-icons/bi";
import MyListCard from './MyListCard';

function MyList() {
  return (
    <>
    <div className="lg:ml-[20vw] lg:w-[75vw] lg:pt-[3vw] lg:h-[100vh] ">
        <div className='lg:h-[9vw] lg:w-[100%]  flex flex-col justify-around '>
            <div className='flex items-center gap-[1vw] lg:h-[4vw] lg:w-[100%] lg:pb-[2vw] '>
                <h1 className='poppins-regular lg:text-[2vw] tracking-wide '>Movie By Tom Cruise</h1>
                <BiEdit  className='lg:text-[2vw] text-[#444343]' />
            </div>
            <div className='flex flex-col justify-start gap-[0.5vw] lg:h-[5vw] lg:w-[100%]'>
                <h4 className='roboto-medium lg:text-[1vw] tracking-wide '>About This watchlist</h4>
                <p className='roboto-regular lg:text-[0.9vw] tracking-wide '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione.</p>
            </div>
        </div>
        <div className="lg:mt-[2vw] flex  flex-wrap lg:gap-[1.24vw] lg:w-[75vw] lg:min-h-[25vw]">
        <MyListCard/>
        </div>
    </div>
    </>
  )
}

export default MyList