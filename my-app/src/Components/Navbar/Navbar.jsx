
import React, { useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const[menu,setMenu] = useState("Shop");
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>ShopKaro</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("Shop")}}> <Link style={{textDecoration:'None'}} to='/'>Shop</Link> {menu==="Shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Men")}}> <Link style={{textDecoration:'None'}} to='/Men'>Men</Link> {menu==="Men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Women")}}> <Link style={{textDecoration:'None'}} to='/Women'>Women</Link> {menu==="Women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Kids")}}> <Link style={{textDecoration:'None'}} to='/Kids'>Kids</Link> {menu==="Kids"?<hr/>:<></>}</li> 
      </ul>
      <div className="nav-login-cart">
      <Link to='/Login'> <button>Login</button> </Link> 
        <Link to ='/Cart'> <img src={cart_icon} alt="" /></Link> 
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
