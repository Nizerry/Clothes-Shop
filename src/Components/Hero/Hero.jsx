import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero flex justify-between '>
        <div className='hero-left'>
            <h2 className='text-[#090909] text-[20px] font-bold '>NEW ARRIVAKS ONLY</h2>
            <div>
                <div className="hand-hand-icon flex items-center gap-[20px] mt-[2px] ">
                    <p className='text-[#171717]  font-[400] '>new</p>
                    <img src={hand_icon} alt=""  className='w-[80px]'/>
                </div>
                <p >collections</p>
                <p>for everyone</p>
            </div>
             <div className="hero-latest-btn flex justify-center items-center gap-[50px]
              w-[260px] h-[40px] border-[75px] mt-[50px] mb-10  font-[500] border-none rounded-3xl " >
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
             </div>
        </div>
        <div className='hero-right flex flex-1 justify-center mb-5'>
            <img src={hero_image} alt="" className='w-[400px]' />

        </div>
      
    </div>
  )
}

export default Hero
