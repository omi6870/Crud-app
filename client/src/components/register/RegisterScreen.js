import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { register }from "../../actions/userActions"
import { useDispatch, useSelector } from 'react-redux';


const RegisterScreen = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userRegister =useSelector((state)=>state.userRegister)
  const {loading,error,userInfo}=userRegister;

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cpassword, setCpassword] = useState("")
  const [pic, setPic] = useState("https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmA…")

  useEffect(()=>{
    if(userInfo){
      navigate('/myitems')
    }
  })

  const submitHandler = async (e) => {
    e.preventDefault()
    console.log(name , email,pic,password)
  if(password!==cpassword){
  toast.warning("password do not match", { position: "top-center" })
  }else{
    dispatch(register(name,email,password,pic))
  }
  }


  const postDetails = (pics) => {

    if (pics.type === 'image/jpeg' || pics.type === 'image/png') {
      const data = new FormData();
      data.append('file', pics)
      data.append('upload_preset', "foodApp")
      data.append('cloud_name', "dubzvfrg3")
      fetch("https://api.cloudinary.com/v1_1/dubzvfrg3/image/upload", {
        method: "post",
        body: data,
      }).then((res) => res.json()).then((data) => {
        console.log(data)
        setPic(data.url.toString());
      }).catch((err) => {
        console.log(err);
      });
    } else {
      toast.warning("please select an image", { position: "top-center" })
    }
  }

  return (
    <div className='register-container'>
      <form className='form' onSubmit={submitHandler}>
        <h1 className='heading'>Register here</h1><br /><br />
        <label className='r-lable'>Name</label><br />
        <input placeholder='enter name' className='r-input' type="text" onChange={(e) => setName(e.target.value)} value={name}></input><br />
        <label className='r-lable'>Email</label><br />
        <input placeholder='enter email' className='r-input' type="email" onChange={(e) => setEmail(e.target.value)} value={email}></input><br />
        <label className='r-lable'>Password</label><br />
        <input placeholder='enter password' className='r-input' type="password" onChange={(e) => setPassword(e.target.value)} value={password}></input><br />
        <label className='r-lable'>Confirm Password</label><br />
        <input placeholder='enter password' className='r-input' type="password" onChange={(e) => setCpassword(e.target.value)} value={cpassword}></input><br />
        <label className='r-lable' for="img">Proile Picture</label><br />
        <input placeholder='Uplod a picture' className='r-input' type="file" accept='image/*' onChange={(e) => postDetails(e.target.files[0])} ></input><br /><br />
        <button className='r-button' style={{ padding: "10px", margin: "10px" }}>Register</button>
        <div className='navigate'>
          <p>Have an Account ?</p>
          <Link to="/login">Login</Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default RegisterScreen