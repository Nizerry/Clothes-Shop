import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer flex flex-col justify-center items-center mt-[100px]'>
      <div className="footer-logo flex justify-center items-center">
        <img src={footer_logo} alt="" />
        <p className='text-3xl font-semibold text-[#383838]'>SHOPPER</p>      
      </div>
      <ul className='footer-links flex justify-center items-center gap-8 font-medium'>
            <li>Company</li>
            <li> Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
      </ul>
      <div className='flex justify-center items-center gap-8'>
        <div className='footer-icons-container'>
            <img src={instagram_icon} alt="" />
        </div>
        <div className='footer-icons-container'>
            <img src={pintester_icon} alt="" />
        </div>
        <div className='footer-icons-container'>
            <img src={whatsapp_icon} alt="" />
        </div>
       
      </div>
        <div className="footer-copyright flex  flex-col items-center pb-4">
        <hr className='border-[1px] border-gray-400 w-[800px] rounded-sm' />
            <p className='font-normal'>Copyright @2024 - All Right Reserved. </p>
        </div>
    </div>
  )
}

export default Footer
