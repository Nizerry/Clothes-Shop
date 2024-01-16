import React from 'react'
import exclusive_image from '../Assets/exclusive_image.png'
import './Offer.css'

const Offer = () => {
  return (
    <div className='offer flex  w-[60%] border-none h-[350px] pb-[30px] mt-6'>
      <div className="offer-left flex flex-col justify-center">
        <h1 className=' '>Exclusive</h1>
        <h1 className=''>Offers For You</h1>
        <p className='font-normal'>ONLY ON BEST SELLERS PRODUCTS</p>
        <button className='mt-3'>Check Now</button>  
      </div>
      <div className="offer-right flex justify-end border-none flex-1 items-center pt-[30px]">
          <img src={exclusive_image} alt=""  className='object-contain h-[250px]'/>
      </div>
    </div>
  )
}

export default Offer
