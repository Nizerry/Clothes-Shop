import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'
const Popular = () => {
  return (
    <div className='popular flex flex-col items-center  '>
      <h1 className='text-[#171717] text-2xl font-medium'>POPULAR IN WOMEN</h1>
      <hr className='w-[130px] h-1 bg-black rounded-xl mb-5'/>
      <div className='popular-item flex flex-wrap'>
        {data_product.map((item,i)=>{
            return(
                <Item key={i} id={item.id} name={item.name} image={item.image} {...item}/>
            )
        })}
      </div>
    </div>
  )
}

export default Popular
