import React from 'react'
import arrow_icon from '../Assets/breadcrum_arrow.png'
const BreadCrums = (props) => {

    const {product}= props;
  return (
    <div className='flex ms-20 my-[25px]'>
      HOME <img src={arrow_icon} alt="" className='h-[20px] mt-1'/> SHOP <img src={arrow_icon} alt="" className='h-[20px] mt-1'/> {product.category} <img src={arrow_icon} alt="" className='h-[20px] mt-1'/> {product.name}
    </div>
  )
}

export default BreadCrums
