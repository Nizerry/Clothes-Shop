import React from 'react'
import new_collection from '../Assets/new_collections'
import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'
const NewCollections = () => {
  return (
    <div className='popular flex flex-col items-center  pb-3'>
      <h1 className='text-[#171717] text-2xl font-medium'>NEW COLLECTIONS</h1>
      <hr className='w-[110px] h-1 bg-black rounded-xl mb-6'/>
      <div className='collections flex gap-[15px] flex-wrap justify-center'>
        {new_collections.map((item,i)=>{
            return(
                <Item key={i} {...item}/>
            )
        })}
      </div>
    </div>
  )
}

export default NewCollections
