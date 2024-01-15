import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import BreadCrums from '../Components/BreadCrums/BreadCrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {

  const {all_product}=useContext(ShopContext);
  const {productid}=useParams();
  const product=all_product.find((e)=>e.id === Number(productid));
  return (
    <div>
      <BreadCrums product={product}/>
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <RelatedProducts product={product}/>
    </div>
  )
}

export default Product
