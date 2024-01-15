import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import './CartItems.css'
const CartItems = () => {

    const {all_product,cartItem,removeFromCart,getTotalCartAmount}=useContext(ShopContext);
  return (
    <div className='mx-[100px] my-[80px]'>
      <div className=' grid grid-cols-[0.8fr_2fr_1fr_1fr_1fr_1fr] cart-nav '>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className='w-[96%]  border-[1px] border-solid border-[#c6c5c5] mb-3 '/>
      {all_product.map((e)=>{
        if(cartItem[e.id]>0){
            return <div>
            <div className='grid grid-cols-[0.8fr_2fr_1fr_1fr_1fr_1fr] w-[100%] h-[300] '>
                
                <img src={e.image} alt=""  className='w-[87px] h-[110px] object-contain ms-3 '/>
                <p className='text-[#1f1e1e] text-base m-auto p-3'>{e.name}</p>
                <p className='m-auto'>${e.new_price}</p>
                <button className='w-[45px] h-[40px] m-auto border-[#ebebeb] border-[1px] border-solid bg-[#fff]'>{cartItem[e.id]}</button>
                <p className='m-auto text-red-600'>${e.new_price *cartItem[e.id]}</p>
                <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" className='m-auto cursor-pointer'/>
                
            </div>
            <hr />
          </div>
        }
        return null;
      })}
      <div className="cartItem-down relative ">
        <div className='my-[50px]'>
            <h1 className='flex flex-row-reverse text-xl font-medium pe-3 mb-3 me-[332px]'>
                Cart Total
            </h1>
            <div className='flex w-[430px] h-[240px] flex-col absolute right-0'>
                <div className='flex justify-between'>
                    <p>Subtatal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr className='border-[1px] border-[#c6c5c5] border-solid my-2'/>
                <div className='flex justify-between'>
                    <p>Shipping fee</p>
                    <p className='text-green-700'>free</p>
                </div>
                <hr className='border-[1px] border-[#c6c5c5] border-solid my-2'/>
                <div className='flex justify-between'>
                    <h1 className='text-lg font-semibold'>Total</h1>
                    <h1>${getTotalCartAmount()}</h1>
                </div>
                <button className='bg-[rgb(239,68,68)] h-[40px] w-[200px] rounded-md my-3 ms-[240px] text-white'>PROCEED TO CHECKOUT</button>
            </div>
            <div >
                <p className='text-[#787575] font-medium text-sm'>If you have a promo code,Enter it here</p>
                <div className='w-[280px] h-[37px]  border-solid  rounded-sm border-1 flex mt-2'>
                    <input type="text"  placeholder='promo code' className='outline-none border-none h-[37px] ps-2 pb-1 bg-[#dfe2ef]'/>
                    <button className='text-white m-auto ps-1 bg-black h-[37px] w-[89px] rounded-sm'>Submit</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
