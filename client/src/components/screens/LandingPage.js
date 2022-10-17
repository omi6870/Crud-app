import React from 'react'
import { MdFastfood } from "react-icons/md";
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    
//     <div className='main'>
//         <div className='landingpage'>
//         <div className='intro-text'>
//            <h1>Welcome To FOODIE<MdFastfood/></h1> 
//            <h5>Your Favourite food is here </h5> 
//         </div>
//         <div className='landing-buttons'>
// <Link to="/login"><button className='l-buttons'>Login</button></Link>
// <Link to="/register"><button className='l-buttons'>SignUp</button></Link>
//         </div>
//         </div>
//     </div>
<div className='l-section'>
  <div className='main'>
    <div className='l-compo'>
    <div className='l-heading'>
      <span className='f-span'>Welcome To FOODIE< MdFastfood/></span>
      <span className='s-span'>Your Favourite Food is here</span>
      <div className='lan-buttons'>
     <Link to="/login"><button className='l-button'>Login</button></Link> 
      <Link to="/register"><button className='l-button'>SignUp</button></Link>
      </div>
    </div>
  </div>
  </div>
</div>
 
    
  )
}

export default LandingPage;