import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className=' newsletter w-[65%] h-[40vh] m-auto mt-4 flex justify-center items-center gap-[25px] flex-col' >
      <h1>Get Exclusive Offers On Yor Email</h1>
        <p className='text-[#6a6969] font-medium'>Subscribe to our newslesster and stay updated</p>
        <div className=' flex justify-between items-center w-[420px] h-[50px] border-2 border-solid  rounded-3xl gap-5'>
            <input type="email" placeholder='Your Email ' className='w-[360px] border-none outline-none ml-3 pb-1'/>
            <button className='bg-black rounded-3xl h-[50px] w-[170px] text-white'>Subscribe</button>        
        </div>
    </div>
  ) 
}

export default NewsLetter
