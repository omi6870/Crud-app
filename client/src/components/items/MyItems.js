import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './MyItems.css';
import {MdRemoveRedEye } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemAction, listItmes   } from '../../actions/itemsAction';






const MyItems = ({search}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const itemList =  useSelector(state=>state.itemList);
  const {loading,items,error}=itemList;

  const userLogin = useSelector((state)=> state.userLogin);
const {userInfo}=userLogin;

const itemCreate = useSelector ((state)=>state.itemCreate);
const {success:successCreate} = itemCreate


const itemUpdate = useSelector ((state)=>state.itemUpdate);
const {success:successUpdate} = itemUpdate

const itemDelete = useSelector ((state)=>state.itemDelete)
const{loading:loadingDelete,error:errorDelete,success:successDelete} =itemDelete



  const deleteHandler =(id)=>{
    if(window.confirm("are you sure?")){
      dispatch(deleteItemAction(id))
    }
  }



  useEffect(()=>{
dispatch(listItmes());

if(!userInfo){
  navigate("/")
}
  },[dispatch,userInfo,successDelete,successCreate,successUpdate]);




  return (
   <div className='i-section'>
    <h1 className='i-heading'>{`Welcome back ${userInfo?userInfo.name:null}`}</h1>
<Link to="/createitems">
    <button className='c-button' style={{margin:"20px",}}>CreateItem</button>
</Link>
<section className='w-card'>
{
  items?.filter(filterItem=>(filterItem.itemName.toLowerCase().includes(search.toLowerCase()))).map((item,id)=>{
    return(
<div className='card' key={item._id} >
    <div className='item-card'  >
      <div className='eye-icon'><Link to={`/itemsScreen/${item._id}`}><MdRemoveRedEye/></Link></div>
    <div ><img src={item.image} alt='img' className='card-img'/></div>
    <div className='item-name'><h3>{item.itemName}</h3></div>
    <div className='item-price'><h4>{item.price}</h4></div>
    <div className='n-buttons'>
   <Link to={`/item/${item._id}`}><button  className='e-button'>Edit</button></Link>
   <button className='d-button' onClick={()=>deleteHandler(item._id)}>Delete</button>
   
    </div>
    </div>
   </div>
    )
    
  })

}
</section>

   </div>
  )
}

export default MyItems