import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { createItemAction } from '../../actions/itemsAction';




const CreateItem = () => {

    const [image, setImage] = useState()
    const [itemName, setItemName] = useState("")
    const [price, setIPrice] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const itemCreate = useSelector((state) => state.itemCreate);
    const { loading, error, item} = itemCreate;

    const userLogin = useSelector((state)=> state.userLogin);
const {userInfo}=userLogin;


    const submitHandler = (e) => {
        e.preventDefault();
       
        if (!image || !itemName || !price) return;
        dispatch(createItemAction(image, itemName, price));
navigate('/myitems')

if (userInfo===null) {
navigate('/myitems')}
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
        <div className='register-container' >
            <form className='form' onSubmit={submitHandler}>
                <h1 className='heading'>Create Item</h1><br /><br />
                <label className='r-lable'>Image</label><br />
                <input placeholder='Uplod a picture' className='r-input' type="file" accept='image/*' onChange={(e) => postPic(e.target.files[0])}  ></input><br /><br />
                <label className='r-lable'>ItemName</label><br />
                <input placeholder='enter itemName' className='r-input' type="text" onChange={(e) => setItemName(e.target.value)} value={itemName}></input><br /><br />
                <label className='r-lable'>Price</label><br />
                <input placeholder='enter price' className='r-input' type="text" onChange={(e) => setIPrice(e.target.value)} value={price}></input><br /> <br />
                <button className='L-button' style={{ padding: "10px", margin: "10px" }} type="submit">Create</button>
            </form>
<ToastContainer/>
        </div>
    )
}

export default CreateItem;