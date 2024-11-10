import React, { useState } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright,faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const[searchstate, setsearchstate]= useState('');

    const changeProduct=(event)=>{
        setsearchstate(event.target.value);
    }
   
   
  return (
 <>
 <div className='container-nav'>
    <Link to="/">
    <h1 style={{color:"white"}}>Home</h1></Link>
    <input type='text' placeholder='Search Product' value={searchstate} onChange={changeProduct} ></input>
  
    <Link to="/Navlast">
    <h3>
   <FontAwesomeIcon className='fontawesome' icon={faCartShopping}></FontAwesomeIcon>
   Cart
   </h3>
   </Link>
     
 </div>

 <div className='second-nav'>
    <Link to="/Mobiles">Apple Mobiles</Link>
    <Link to="/Laptops">Apple Macbooks</Link>
  <Link to="/Tablets">Apple Ipads</Link>
    <Link to="/Klaptops">Dell Laptops</Link>
   <Link to="/Omobiles">Oppo Mobiles</Link>
    <Link to="/Claptops">Lenovo Laptops</Link>
    <Link to="/Cmobiles">SamSung Mobiles</Link>
   
  

  </div>
 <footer>
 
</footer>
 </>
  )

}
export default Navbar
