import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate , useParams} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import {  updateItemAction } from '../../actions/itemsAction';




const SingleItem = ({}) => {

    const [image, setImage] = useState()
    const [itemName, setItemName] = useState("")
    const [price, setIPrice] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const itemUpdate = useSelector((state) => state.itemUpdate);
    const { loading, error} = itemUpdate;
const {id}=useParams()

useEffect(()=>{
    const fetching =async()=>{
        const {data}= await axios.get(`/api/items/${id}`);
         setImage(data.image)
         setItemName(data.itemName)
         setIPrice(data.price)
    };
    fetching();
} ,[id])

const updateHandler = (e) => {
    e.preventDefault();
   
    dispatch(updateItemAction(id,image,itemName,price));
    if (!image || !itemName || !price) return;
navigate('/myitems')
}




    const postPic = (pic) => {

        if (pic.type === 'image/jpeg' || pic.type === 'image/png') {
            const data = new FormData();
            data.append('file', pic)
            data.append('upload_preset', "foodApp")
            data.append('cloud_name', "dubzvfrg3")
            fetch("https://api.cloudinary.com/v1_1/dubzvfrg3/image/upload", {
                method: "post",
                body: data,
            }).then((res) => res.json()).then((data) => {
                
                setImage(data.url.toString());
            }).catch((err) => {
                console.log(err);
            });
        } else {
            toast.warning("please select an image", { position: "top-center" })
        }
    }
    return (
        <div className='register-container'>
            <form className='form' onSubmit={updateHandler}>
                <h1 className='heading'>Edit Item</h1><br /><br />
                <label className='r-lable'>Image</label><br />
                <input placeholder='Uplod a picture' className='r-input' type="file" accept='image/*' onChange={(e) => postPic(e.target.files[0])}  ></input><br /><br />
                <label className='r-lable'>ItemName</label><br />
                <input placeholder='enter itemName' className='r-input' type="text" onChange={(e) => setItemName(e.target.value)} value={itemName}></input><br /><br />
                <label className='r-lable'>Price</label><br />
                <input placeholder='enter price' className='r-input' type="text" onChange={(e) => setIPrice(e.target.value)} value={price}></input><br /> <br />
                <button className='L-button' style={{ padding: "10px", margin: "10px" }} type="submit">Update</button>
            </form>
<ToastContainer/>
        </div>
    )
}

export default SingleItem;