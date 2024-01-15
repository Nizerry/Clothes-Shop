import React, { useContext } from 'react'
import data_product from '../Assets/data'
import Item from '../Item/Item'
import { ShopContext } from '../../Context/ShopContext'
// import { Carousel } from 'flowbite-react';
const RelatedProducts = (props) => {
  const {product}=props
  const {all_product}=useContext(ShopContext);

  const relatedproduct=all_product.filter(item=>product.category===item.category)

  return (
    <div className='flex flex-col justify-center items-center '>
      <h1 className='text-3xl font-semibold'>Related Products</h1>
      <hr className='w-[140px] mb-[50px] border-[2px] border-solid border-[#171717] rounded-sm'/>



      <div className="relatedproduct-container grid grid-cols-3 grid-[0.3fr_0.3fr_0.3fr] 
       gap-5 h-[410px] overflow-y-scroll py-3 w-[79%]  m-auto px-5 ">
        
          {relatedproduct.map((item, i) => (
            <Item key={i} {...item} />
          ))}
        
      </div>
        

    </div>
  )
}

export default RelatedProducts
