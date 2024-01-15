import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  const { image, name, new_price, old_price } = props;
  return (
    <div className="item w-[250px]  ">
      <Link to={`/product/${props.id}`}><img src={image} onClick={window.scrollTo(0,0)} alt="" className="rounded-xl"/></Link> 
      <p className="font-medium">{name}</p>
      <div className="item-prices flex gap-[10px] ">
        <div className="text-[#374151] border-none text-[18px] font-semibold ">
          ${new_price}
        </div>
        <div className="text-[#8c8c8c] text-[15px] font-semibold line-through mt-1 ">
          ${old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
