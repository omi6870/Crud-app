import axios from "axios";
import{USER_LOGIN_FAIL,USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS} from "../constatnts/userConstants";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const login =(email,password)=>async (dispatch)=>{

    try {

        dispatch({type:USER_LOGIN_REQUEST});

        const config ={
            headers:{
                "Content-type":"application/json"
            }
        }

        const {data} = await axios.post("/api/users/login",{email,password},config);
        dispatch({type: USER_LOGIN_SUCCESS, paylod:data});

        console.log(data);
        localStorage.setItem("userInfo", JSON.stringify(data))
      
        }
        catch (error) { 
            dispatch({type:USER_LOGIN_FAIL,paylod:
            error.response && error.response.data.message
            ?error.response.data.response
            :error.message,
            })
toast.warning( "invalid email or password !",{position:"top-center"})
        }
<ToastContainer/>

};


export const logout =()=> async(dispatch)=>{
    localStorage.removeItem("userInfo");
    dispatch({type :USER_LOGOUT})
};


export const register =( name,email,password,pic)=>async(dispatch)=>{
  
        try {
            dispatch({type:USER_REGISTER_REQUEST});
          const config = {
            headers: {
              "Content-type": "application/json"
            }
          }
          const { data } = await axios.post("/api/users", { name, email, password, pic }, config);
        dispatch({type:USER_REGISTER_SUCCESS,paylod:data})
        dispatch({type:USER_LOGIN_SUCCESS,paylod:data})
          localStorage.setItem("userInfo", JSON.stringify(data))
          console.log(data)
          toast.success("Register Successfull", { position: "top-center" })
        
  
        }
        catch (error) {
            dispatch({type:USER_REGISTER_FAIL,paylod:
                error.response && error.response.data.message
                ?error.response.data.response
                :error.message,})
          toast.warning("somthing wrong", { position: "top-center" })
        }
  
      }
    
  
  
