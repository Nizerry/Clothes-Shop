import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { IoCart } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    
    const [menu,setMenu]=useState("shop");
    const {totalCartItemCount}=useContext(ShopContext);
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <Link to='/'>
      <li onClick={()=>{setMenu("shop")}}>Shop {menu==="shop"? <hr /> :<> </>}</li>
        </Link>
      <li onClick={()=>{setMenu("mens")}}> <Link to={'/mens'}>Men </Link> {menu==="mens"? <hr /> :<> </>}</li>
      <li onClick={()=>{setMenu("womens")}}> <Link to={'/womens'}>Women</Link> {menu==="womens"? <hr /> :<> </>}</li>

      <Link to={'/kids'}>
      <li onClick={()=>{setMenu("kids")}}> Kid{menu==="kids"? <hr /> :<> </>}</li>
      </Link>
      </ul>
      <div className="nav-login-cart">
        <Link to={'/login'}><button>Login</button></Link> 
        {/* cart icon */}
       <Link to={'/cart'}><IoCart  className='text-4xl'/></Link> 
        <div className="badge bg-red-600 text-white badge-sm nav-cart-count">{totalCartItemCount()}</div>


        
        
      </div>
    </div>
  )
}

export default Navbar
