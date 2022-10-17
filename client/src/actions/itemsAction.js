import axios from "axios";
import { ITEMS_CREATE_FAIL, ITEMS_CREATE_REQUEST, ITEMS_CREATE_SUCCESS, ITEMS_DELETE_FAIL, ITEMS_DELETE_REQUEST, ITEMS_DELETE_SUCCESS, ITEMS_LIST_FAIL, ITEMS_LIST_REQUEST, ITEMS_LIST_SUCCESS, ITEMS_UPDATE_FAIL, ITEMS_UPDATE_REQUEST, ITEMS_UPDATE_SUCCESS } from "../constatnts/itemsConstatnts";


export const listItmes =()=>async(dispatch,getState)=>{
    try{
        dispatch({
            type:ITEMS_LIST_REQUEST,
        })

        const {
            userLogin:{userInfo},
        }=getState();
        

        const config ={
           headers:{
            Authorization:`Bearer ${userInfo.token}`
           }
        };
        const {data}=await axios.get('/api/items',config);
        dispatch({type:ITEMS_LIST_SUCCESS , paylod:data,});
    }catch(error){
        const message = error.response && error.response.data.message
        ? error.response.data.message
        :error.message;
        dispatch({
            type:ITEMS_LIST_FAIL,
            paylod:message,
        });
    }
}



export const createItemAction=(image,itemName,price) => async(dispatch,getState)=>{
    try{
        dispatch({
            type : ITEMS_CREATE_REQUEST,
        });

        const {
            userLogin:{userInfo},
        }=getState();

        const config ={
            headers: {
                "Content-Type":"application/json",
                Authorization:`Bearer ${userInfo.token}`,
            },};

            const {data}=await axios.post(`/api/items/create`,{image,itemName,price},config);

            dispatch({type : ITEMS_CREATE_SUCCESS , paylod  : data})


    }catch(error){
        const message = error.response && error.response.data.message
        ? error.response.data.message
        :error.message;
        dispatch({
            type:ITEMS_CREATE_FAIL,
            paylod:message,
        });
    }
}



export const updateItemAction =
(id,image,itemName,price) =>async(dispatch,getState)=>{
    try{
        dispatch({type:ITEMS_UPDATE_REQUEST});


        const {
            userLogin:{userInfo},
        }=getState();

        const config ={
            headers: {
                "Content-Type":"application/json",
                Authorization:`Bearer ${userInfo.token}`,
            },};


        const {data}=await axios.put(`/api/items/${id}`,{image,itemName,price},config);
        dispatch({type:ITEMS_UPDATE_SUCCESS,paylod:data});

    }catch(error){
        const message = error.response && error.response.data.message
        ? error.response.data.message
        :error.message;
        dispatch({
            type:ITEMS_UPDATE_FAIL,
            paylod:message,
        });
    }
}


 export const deleteItemAction =(id)=>async(dispatch,getState)=>{
    try{
        dispatch({type:ITEMS_DELETE_REQUEST});


        const {
            userLogin:{userInfo},
        }=getState();

        const config ={
            headers: {
                Authorization:`Bearer ${userInfo.token}`,
            },};
        
            const {data} =await axios.delete(`/api/items/${id}`,config);

            dispatch({
                type:ITEMS_DELETE_SUCCESS,
                paylod:data,
            });
            
    }catch(error){
        const message = error.response && error.response.data.message
        ? error.response.data.message
        :error.message;
        dispatch({
            type:ITEMS_DELETE_FAIL,
            paylod:message,
        });
    }


 }