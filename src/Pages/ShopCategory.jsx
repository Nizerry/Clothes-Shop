import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
// import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item';
import { RiArrowDropDownLine } from "react-icons/ri";

const ShopCategory = (props) => {

  const {all_product}=useContext(ShopContext);
  
  return (
    <div>
      <img src={props.banner} alt="" className='block mx-[180px] w-[80%] rounded-md' />
      <div className='flex justify-between items-center mx-auto my-3 w-[82%]'>
        <p>
          <span className='font-medium'>Showing 1-12</span> out of 36 products
        </p>
        <div className='border-[2px] border-[#dd6f4d] border-solid rounded-3xl pl-3 pb-[1px] flex  justify-center items-center'>
           <p className='font-medium cursor-pointer'>Sort by</p> 
           <RiArrowDropDownLine className=' pt-[2px] h-6 w-6 '/>
        </div>
      </div>
      <div className='flex flex-wrap gap-4 justify-center items-center'>
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return(<Item key={i} {...item}/>)
          }else{
            return (null);
          }
        })}
      </div>
    </div>
  )
}

export default ShopCategory
