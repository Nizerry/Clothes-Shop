import React, { useContext } from 'react'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext'
import Item from '../Item/Item'
import all_product from '../Assets/all_product'

const ProductDisplay = (props) => {
const {product}=props;

const {addToCart}=useContext(ShopContext);
  return (
    <div className='flex mt-2'>
      <div className="productdisplay-left flex ">
        <div className='productdisplay-left-img-list ms-20 '>
            <img src={product.image} alt=""  className='mt-1'/>
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className='productdisplay-img ms-3'>
            <img src={product.image} alt="" className="productdisplay-main-img h-[460px] w-[400px] object-cover mt-1" />
        </div>
      </div>
      <div className="productdisplay-right px-16">
            <h1 className='text-3xl font-semibold font-sans'>{product.name}</h1>
            <div className='flex star gap-1 mt-3 mb-5 items-center'>
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
            <p className='text-sm font-normal'>(122)</p>
            </div>
            <div className='productdisplay-right-price flex gap-1'>
                <div className='productdisplat-right-price-old text-lg line-through text-[#5c5c5c]'>${product.old_price}</div>
                <div className='productdisplat-right-price-new text-xl text-[#c53d3d]'>${product.new_price}</div>
            </div>
            <div className='my-[25px] font-sans text-[#313030]'>
                A lightweight, usually knitted, pullover shirt.
            </div>
            <div>
                <h1 className='text-xl font-semibold text-[#3f3e3e]'>Select Size</h1>
                <div className='size-btn flex items-center mt-3 gap-2'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                    
                </div>
            </div>
            <button className='text-white bg-red-500 ms-1 px-3 rounded-sm mt-5 mb-5 h-9' onClick={()=>{addToCart(product.id)}}>ADD to CART</button>
            <p className='productdisplay-right-category font-sans mt-7'> <span className='font-medium'>Category : </span>{product.category}</p>
            <p className='productdisplay-right-category font-sans'> <span className='font-medium'>Tags : </span>Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
