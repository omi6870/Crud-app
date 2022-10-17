import React from 'react'
import { MdSearch, MdFastfood, MdFoodBank } from "react-icons/md";
import {FaUser} from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../actions/userActions';

const Header = ({ setSearch }) => {


  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/")
  }

  const navigate = useNavigate()
  return (

    <div className='nav-section'>
      <nav className='main-nav'>

        <div className='nav-logo'>
          <h2>
          <span>FOODIE</span>
            <span><MdFastfood /></span>
          </h2>
        </div>

        <div className='nav-search'>
          <input placeholder='search item' onChange={(e) => setSearch(e.target.value)}></input>
          <MdSearch style={{color:"grey" , fontSize:20}}/>
        </div>

        <div className='menu-link'>
<ul>
<Link to="/myitems"><li>MyItems <MdFoodBank/></li></Link>
  <Link><li><FaUser/>{userInfo?userInfo.name:null}</li></Link>
  <Link><li onClick={logoutHandler}>Logout</li> </Link>
</ul>
        </div>
      </nav>
    </div>
  )
}

export default Header