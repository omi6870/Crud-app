import React, { useEffect, useState } from 'react'
import './Login.css';
import { Link , useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import {useDispatch, useSelector} from "react-redux"
import { login } from '../../actions/userActions';




const LoginScreen = () => {

    const navigate = useNavigate()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
const dispatch = useDispatch();
const userLogin = useSelector((state)=> state.userLogin);
const {loading,error,userInfo}=userLogin;

useEffect(()=>{
    if(userInfo){
        navigate('/myitems')
    } 
},[navigate,userInfo])
    const submitHandler = async(e)=>{
        e.preventDefault()

        dispatch(login(email,password))
        
    }

    
       
     

    


   
    
  return (
    <div className='login-container'>  
                <form className='form' onSubmit={submitHandler} >
                    <h1 className='heading'>Login here</h1><br/><br/>
                    <label className='f-lable'>Email</label><br/>
                    <input placeholder='enter email' className='f-input' type="email" onChange={(e)=> setEmail(e.target.value)} value={email}></input><br/>
                    <label className='f-lable' >Password</label><br/>
                    <input placeholder='enter password' className='f-input' type="password" onChange={(e)=> setPassword(e.target.value)} value={password}></input><br/><br/>
                    <button className='L-button' type='submit' style={{padding:"10px" , margin:"10px"}} >Login</button>
                    <div className='navigate'>
                    <p>New User ?</p>
                     <Link to="/register">Register Here</Link>
                    </div>
                </form>
            <ToastContainer/>
    </div>
  )
}

export default LoginScreen