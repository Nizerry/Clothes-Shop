import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="flex ">
        <div className="descriptionbox-nav-box border-solid border-[#D0D0D0] border-[1px] w-[100px] h-10 px-3 py-2 text-sm font-sans font-medium cursor-pointer">
          Description
        </div>
        <div className="descriptionbox-nav-box fade border-solid border-[#D0D0D0] border-[1px] w-[110px] h-10 px-3 py-2 text-sm text-[#5c5c5c] font-sans font-normal cursor-pointer ">
          Reviews(122)
        </div>
      </div>
      <div className="flex flex-col gap-5 px-7 py-10 border-solid border-[1px] border-[#D0D0D0]">
        <p className="font-sans font-[460]">
          An e-comerce website is an online platform that facilitates the buying
          and selling of products or services over the internet. It serves as a
          virtuaal marketplace where businesses and individuals can showcase
          their products, interact with customer , and conduct transactions
          without the need for a physical presence. E-commerce websites have
          gained immense popularity due to their convenience, accessibility, and
          the global reacg they offer.
        </p>
        <p className="font-[460]">
          E-commerce websites typically display products or services along with
          detailed descriptions, images, prices,an any available variations
          (e.g.,sizes,colors).Each product usually has its own dedicated page
          with relevant information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
