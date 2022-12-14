import { USER_LOGIN_FAIL, USER_LOGOUT, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS,USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS,USER_REGISTER_FAIL } from "../constatnts/userConstants"


export const userLoginReducer=(state={},action)=>{
    switch(action.type){
    case USER_LOGIN_REQUEST:
        return{loading: true};
        case USER_LOGIN_SUCCESS:
        return{loading: true, userInfo: action.paylod};
        case USER_LOGIN_FAIL:
        return{loading: false , error: action.paylod};
        case USER_LOGOUT:
        return{};
        default:
            return state
    }
}



export const userRegisterReducer=(state={},action)=>{
    switch(action.type){
    case USER_REGISTER_REQUEST:
        return{loading:true};
        case USER_REGISTER_SUCCESS:
        return{loading:false, userInfo: action.paylod};
        case USER_REGISTER_FAIL:
        return{loading:false , error:action.paylod};
        default:
            return state
    }
}